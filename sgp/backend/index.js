const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myapplication" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("Database Connected")
})

//routes
const userSchema = new mongoose.Schema({
    
    email: String,
    enrollment: String,
    password: String 

})

const User = new mongoose.model("User", userSchema)
module.exports = User
app.post("/StudentLogin",(req,res)=>{
    const{ email , password } = req.body
    User.findOne({email: email},(err,user) => {
        if(user)
        {
            if(password === user.password)
            {
                res.send({message:"Login successful" , user:user})
            }else
            {
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send("User registered" , user)
        }
    })
})
    


app.post("/Student",(req,res)=>{
    const{ email , enrollment , password } = req.body
    User.findOne({email:email},(err,user) =>{
        if(user){
            res.send({message:"User already registered "})
        }else{
            const user =  new User({
                email,
                enrollment,
                password
            })
            user.save( err =>{
                if(err) {
                    res.send(err)
                 } else{
                     res.send({ message:"successfuly registered , please login now.!" })
                 }
            })   
        }

        })
    })

    


app.listen(9002,()=>{
    console.log("BE started at port 9002")
})