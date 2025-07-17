import React from 'react';
import "./Login.scss";
import {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Login =()=>{

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const[data,setData]= useState([]);
      
   
       

   const handleLoginClick = (e) => {
    // e.preventDefault(); // prevent form reload
    login(); // this just sets a dummy user from context (as per your authContext file)
    navigate("/"); // redirect to homepage
  };

  
    return(
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore laudantium alias perferendis ab maiores impedit ad, nisi cum, saepe eligendi ducimus neque, dolorem veritatis sapiente nobis. Quia, facere consequuntur.</p>
                    <span>Don't you have an account</span>
                    <Link to ="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" placeholder='Username' value={username} name='username' />
                        <input type="text" placeholder='Password' value={password}  name ='password'/>
                        <button onClick={handleLoginClick}>Login</button>

                    </form>
                </div>

            </div>
            
        </div>
    )
}   

export default Login;