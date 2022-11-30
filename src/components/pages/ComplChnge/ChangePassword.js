import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";


function ChangePassword(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
            <h5 class="p-3">Change Password</h5>
            </div> 

            <div class="container-fluid bg2 rounded passwordform col-lg-8 shadow"> 
            <div class="form mb-2 d-flex-justify-content-center mb-5">
               <form class="mb-50 d-flex-justify-content-center p-3">

                <div class="row mb-5 my-5">
                    <label for="inputPassword3" class="col-sm-3 col-form-label fs-14 fw-normal">Old Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                      </div>
                </div>

                <div class="row mb-5">
                    <label for="inputPassword3" class="col-sm-3 col-form-label fs-14">New Password:</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>

                <div class="row mb-5">
                    <label for="inputPassword3" class="col-sm-3 col-form-label fs-14">Confirm Password:</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>

                    <div class="d-flex mt-5 passwordform-btn">
                        <button type="submit" class="btn btn-primary btn2 shadow mt-2 border-0 fs-12 bg-white">Back</button>
                        <button type="submit" class="btn btn-primary btn1  shadow mt-2 border-0 fs-12 mx-3">Save</button>
                      </div>
                </div>
              </form> 
            </div>
          </div> 

        </div>
    )
}

export default ChangePassword;