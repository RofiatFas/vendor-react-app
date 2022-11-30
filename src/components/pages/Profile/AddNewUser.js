import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";


function AddNewUser(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
              <h5 class="p-3">Add New user</h5>
            </div> 

            <div class="container-fluid mb-5 bg2 mx-2 rounded formcon"> 
            <div class="form mb-2 d-flex-justify-content-center">
             <h5 class="p-3">New user creation request form</h5>
        
               <form class="formBox mb-50 d-flex-justify-content-center p-3 mt-2">

                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Gender:</label>
                    <div class="col-sm-3">
                      <select id="inputState" class="form-select border-1 border-dark bg2">
                          <option selected></option>
                          <option>...</option>
                        </select>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">User&nbsp;Permission&nbsp;Group:</label>
                    <div class="col-sm-3">
                      <select id="inputState" class="form-select border-1 border-dark bg2">
                          <option selected></option>
                          <option>...</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Last&nbsp;Name:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">First&nbsp;name:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Middle&nbsp;Name:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Telephone:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Job Title:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Manager:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>
  
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Requested&nbsp;By:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">User&nbsp;Type:</label>
                    <div class="col-sm-3">
                      <input type="password" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">Company&nbsp;Email:</label>
                    <div class="col-sm-3">
                      <input type="email" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Company&nbsp;Name:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-1 col-form-label fs-11">User&nbsp;Email:</label>
                    <div class="col-sm-3">
                      <input type="email" class="form-control border-1 border-dark bg2" id="inputEmail3"/>
                    </div>
                    <label for="inputPassword3" class="col-sm-1 col-form-label fs-11">Company&nbsp;ID:</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control border-1 border-dark bg2" id="inputPassword3"/>
                    </div>
                </div>
     
                <div>
                  <button type="submit" class="btn btn-primary btn1 mb-5 shadow mt-2 border-0 fs-12">Request User Creation</button>
                </div>
              </form> 
            </div>
          </div> 

        </div>
    )
}

export default AddNewUser;