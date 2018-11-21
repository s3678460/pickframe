import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (

            <div className="bodylogin mb-0">

                <div className="vid-container">

                    <div className="inner-container">

                        <div className="box">
                            <h1><a href="http://funkyimg.com/view/2NhH3" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1>
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Password" />
                            <button>Login</button>
                            <p>Not a member? <span> <b>Sign Up</b> </span></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;