import "./Register.scss";
import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState} from 'react';
import axios from 'react';

const Register =()=>{

    const[data,setData]= useState("");
    const[name,setName] = useState("");
    const[username,setUsername] = useState("")
    const[email,setEmail]= useState("")
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const[err,setErr] = useState(null);

    

    // console.log(inputs);
    const handleClick = async(e) =>{
        // e.preventDefault();  
    const res = await fetch("http://localhost:8800/Backend/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            username:username,
            password:password,
            email:email })
    });

    const data = await res.json();
    alert(data.message);

    if(data.token){
        alert("Register Successfully");
        navigate("/login/Login");
    }
    else{
        console.log(err);
        alert("Register Failed");
    }
         
    };
    console.log(err)

    return(
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Lama Social</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore laudantium alias perferendis ab maiores impedit ad, nisi cum, saepe eligendi ducimus neque, dolorem veritatis sapiente nobis. Quia, facere consequuntur.</p>
                    <span>Don't you have an account</span>
                    <Link to ="/login"><button>Login</button></Link>
                     
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder='Username' name="username" onChange ={(e)=>setUsername(e.target.value)} />
                        <input type="email" placeholder='Email' name="email" onChange ={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder='Password' name="password"  onChange ={(e)=>setPassword(e.target.value)}/>
                        <input type="text" placeholder='Name' name ="name"   onChange ={(e)=>setName(e.target.value)}/>
                        <button onClick={handleClick}>Register</button>

                    </form>
                </div>

            </div>
            
        </div>
    )
}    

export default Register;