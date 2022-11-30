import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div>
                <section class="welcome">
        <div class="row ">
            <div class="col-md-6 bg-1 text-center">
                <div class="text-white welcome-text">
                <img src='img/welcome_bck.svg' className="img-fluid img-width" alt="" />
                    <h3 class="">Welcome Back</h3>
                    <p class="">Just a couple of clicks and you are in </p>
                </div>
            </div>

            <div class="col-md-6 bg-white">
                <form class="box-width mx-5 welcome-form">
                    <h2>Login</h2>
                    <div class="mb-3 mt-4">
                      <label for="exampleInputEmail1" class="form-label">Email address*</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" width="" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password*</label>
                      <div class="input-group">
                        <input type="password" placeholder="Enter your password" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp"/>
                        <span class="input-group-text bg-white" id="basic-addon3">Show</span>
                       </div>
                      <span><Link to='/reset' type="button">Forget Password?</Link></span>
                    </div>
                    <Link to='/homepage' type="button" class="btn btn-primary btn-width shadow border-0 mt-4 mb-5">Login</Link>
                  </form>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Login;