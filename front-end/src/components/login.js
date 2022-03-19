import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import "../components/css/style.css"
function Login() {
    const [active,setActive]=useState("container")
    const [formData,setFormData]=useState({name:"",email:"",password:""})
    const navigate = useNavigate();

    function toggle(e){
        if (e.target.id==="signUp"){
            setActive("container right-panel-active")
        }
        else{
        setActive("container")
        }
    }
    function handleChange(e){
        var formVal={...formData}
        formVal[e.target.id]=e.target.value
        setFormData(formVal)
        // console.log(formData);
    }
    function Submit(e){
        e.preventDefault();
        var payload=formData
        console.log(e.target.id);
        if (e.target.id==="signUp"){
            let url="http://localhost:3001/register"
            axios.post(url,{data:payload})
            .then(res=>{
                console.log(res)
                navigate("/", { replace: true });
            })
            .catch(err=>console.log(err))
        }
        else{
            let url="http://localhost:3001/login"
            axios.post(url,{data:payload})
            .then(res=>{
                console.log(res)
                navigate("/home", { replace: true });
            })
            .catch(err=>console.log(err))
        }
    }
    return (
        <div className={active} id="container">
            <div className="form-container sign-up-container">
                <form action="#"id="signUp" onSubmit={(e)=>Submit(e)}>
                    <h1>Create Account</h1>
                    {/* <span>or use your email for registration</span> */}
                    <input type="text" placeholder="Name" id="name" value={formData.name} onChange={(e)=>handleChange(e)}/>
                    <input type="email" placeholder="Email" id="email" value={formData.email}onChange={(e)=>handleChange(e)}/>
                    <input type="password" placeholder="Password" id="password" value={formData.password}onChange={(e)=>handleChange(e)}/>
                    <button >Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#"id="signIn" onSubmit={(e)=>Submit(e)}>
                    <h1>Sign in</h1>
                    {/* <span>or use your account</span> */}
                    <input type="text" placeholder="Name" id="name"value={formData.name} onChange={(e)=>handleChange(e)} />
                    <input type="password" placeholder="Password"id="password"value={formData.password} onChange={(e)=>handleChange(e)} />
                    {/* <a href="#">Forgot your password?</a> */}
                    <button>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={(e)=>toggle(e)}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hey, There! New Here?</h1>
                        <p>Get started with us</p>
                        <button className="ghost" id="signUp" onClick={(e)=>toggle(e)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;