import React from 'react';
import "../components/css/style.css"
function Home() {
   
    return (
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                {/* <form action="#"id="signUp" onSubmit={(e)=>submit(e)}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" id="name" value={formData.name} onChange={(e)=>handleChange(e)}/>
                    <input type="email" placeholder="Email" id="email" value={formData.email}onChange={(e)=>handleChange(e)}/>
                    <input type="password" placeholder="Password" id="password" value={formData.password}onChange={(e)=>handleChange(e)}/>
                    <button >Sign Up</button>
                </form> */}
            </div>
            <div className="form-container sign-in-container">
                {/* <form action="#"id="signIn" onSubmit={(e)=>submit(e)}>
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <input type="text" placeholder="Name" id="name"value={formData.name} onChange={(e)=>handleChange(e)} />
                    <input type="password" placeholder="Password"id="password"value={formData.password} onChange={(e)=>handleChange(e)} />
                    <a href="#">Forgot your password?</a>
                    <button>Login</button>
                </form> */}
                <h1 style={{color: "#FF416C",textAlign: "center",margin: "auto",padding: "50% 65%"}}>Holla!</h1>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    {/* <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={(e)=>toggle(e)}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hey, There! New Here?</h1>
                        <p>Get started with us</p>
                        <button className="ghost" id="signUp" onClick={(e)=>toggle(e)}>Sign Up</button>
                    </div> */}
                <h1 style={{color: "#ffffff",textAlign: "center",margin: "auto",padding: "25% 55%"}}>Dezentra</h1>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;