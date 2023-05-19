import React, {useContext, useEffect} from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router';

const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
    useEffect(()=>{
        fetch('/Logout',{
            method: "GET",
            headers:{
                Accept:"application/json", 
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER", payload:false});
            history.push('/StudentLogin', {replace: true});
        })
    })



    return (
        <div>
            
        </div>
    )
}

export default Logout