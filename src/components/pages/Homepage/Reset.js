import React from "react";
import { Link } from "react-router-dom";

function Reset(){
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
                    <h2 class="mb-4">Reset Password</h2>
                    <p class="fs-14">Enter the email address associated with your account, and we’ll send you a link to reset your password.</p>
                    <div class="mb-3 mt-4">
                      <label for="exampleInputEmail1" class="form-label">Email address*</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email address" width="" aria-describedby="emailHelp"/>
                    </div>
                    <Link to='/login' type="button" class="btn btn-primary btn-width shadow border-0 mt-4 mb-5">Reset Password</Link>
                  </form>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Reset;