import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";


function Profile(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
              <h5 class="p-3">Personal Information</h5>
            </div> 

            <div class="container-fluid mb-5 bg2 mx-2 rounded formcon"> 
            <div class="form mb-2 d-flex-justify-content-center">
             <h5 class="p-3">Personal Details</h5>
        
               <form class="row g-3 formBox mb-50 d-flex-justify-content-center p-3">
                
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">User&nbsp;no:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Last&nbsp;Name:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">First Name:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Middle&nbsp;Name:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Date&nbsp;of&nbsp;Birth:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Gender:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Job&nbsp;Title:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Designation:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Cadre:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11"></label>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Personal&nbsp;Email:</label>
                  <div class="col-sm-5">
                    <input type="email" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Phone&nbsp;Number:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Mobile&nbsp;Number:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Address&nbsp;1:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Address&nbsp;2:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">City:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Post&nbsp;Code:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                  </div>
                  <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Company&nbsp;ID:</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                  </div>
                </div> 
     
                <div>
                  <button type="submit" class="btn btn-primary btn1 mb-5 shadow mt-2 border-0 fs-12">Save</button>
                </div>
              </form>
              
        
            </div>
          </div> 
        </div>
    )
}

export default Profile;