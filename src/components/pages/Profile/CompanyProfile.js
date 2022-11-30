import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";


function CompanyProfile(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid">
              <div class="row">
               <div class="col-sm-4 mb-5 mt-3 rounded bid1 mx-3">
               <h5 class="fs-5 my-3">Codeware&nbsp;Nigeria</h5>
                <h6 class="fs-5">Address</h6>
                <p class="fs-14">God's&nbsp;Grace&nbsp;Plaza,&nbsp;65&nbsp;Allen<br/>Ave,&nbsp;Allen&nbsp;101233,&nbsp;Ikeja,&nbsp;Lagos,&nbsp;Nigeria.</p>
                <hr class="line" size="3"/>
                <h6 class="fs-5">Email Address</h6>
                <p class="fs-14">info@codeware.com.ng</p>
                <hr class="line" size="3"/>
                <h6 class="fs-5">Phone&nbsp;Number</h6>
                <p class="fs-14">0804 653 2561</p>
                <hr class="line" size="3"/>

                <div class="card text-white mb-3 mt-3 border-0 cardwidth">
                  <div class="card-body rounded bg1">
                    <p class="card-title fs-5">Users</p>
                    <p class="card-text mt-3 fw-bold fs-3">6</p>
                  </div>
                </div>

                <div class="card text-white mb-3 mt-3 border-0 cardwidth">
                  <div class="card-body rounded bg1">
                    <p class="card-title fs-5">Users</p>
                    <p class="card-text mt-3 fw-bold fs-3">4</p>
                  </div>
                </div>
               </div>

               <div class="col-sm-8 mt-3 rounded bg2 mx-2 mb-5" height="100vh">
                 <div class="table-responsive mx-4">
                 <h5 class="p-1 mt-2 fs-5">Users List</h5>
                  <table class="table table-bordered bg-white">
                    <thead class="table-light">
                      <th class="fw-light">S/N</th>
                      <th class="fw-light">SEX</th>
                      <th class="fw-light">FULL&nbsp;NAME</th>
                      <th class="fw-light">EMAIL ADDRESS</th>
                      <th class="fw-light">USER&nbsp;PERMISSION GROUP</th>
                      <th class="fw-light">TELEPHONE</th>
                      <th class="fw-light">MANAGER</th>
                    </thead>
                
                    <tbody> 
                    <tr class="fs-14" height="10">
                      <td>1</td>
                      <td contenteditable='true'>Male</td>
                      <td contenteditable='true'>Oluwaseyi&nbsp;Yetunde</td>
                      <td contenteditable='true'>Oluwaseyi.Y@codeware.com</td>
                      <td contenteditable='true'>Asst.&nbsp;Manager</td>
                      <td contenteditable='true'>0803&nbsp;209&nbsp;1372</td>
                      <td contenteditable='true'>Self</td>
                    </tr>
                      <tr class="fs-14">
                        <td>2</td>
                        <td contenteditable='true'>Female</td>
                        <td contenteditable='true'>Oluwaseyi&nbsp;Yetunde</td>
                        <td contenteditable='true'>Oluwaseyi.Y@codeware.com</td>
                        <td contenteditable='true'>Product&nbsp;Manager</td>
                        <td contenteditable='true'>0803&nbsp;209&nbsp;1372</td>
                        <td contenteditable='true'>Self</td>
                      </tr>
                      <tr class="fs-14">
                        <td>3</td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                      </tr>
                      <tr class="fs-14">
                        <td>4</td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                      </tr>
                      <tr class="fs-14">
                        <td>5</td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                      </tr>
                      <tr>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                      </tr>
                
                
                    </tbody> 
                  </table>
                 </div>

                 <div class="table-responsive mx-3">
                  <h5 class="p-1 fs-5 mt-2">New Users creation request</h5>
                  <table class="table table-bordered bg-white" style="width: 100%;">
                    <thead class="table-light fs-14">
                      <th class="fw-light">S/N</th>
                      <th class="fw-light">SEX</th>
                      <th class="fw-light">FULL&nbsp;NAME</th>
                      <th class="fw-light">EMAIL ADDRESS</th>
                      <th class="fw-light">USER&nbsp;PERMISSION&nbsp;GROUP</th>
                      <th class="fw-light">TELEPHONE</th>
                      <th class="fw-light">JOB&nbsp;TITLE</th>
                    </thead>
                
                    <tbody> 
                    <tr class="fs-14">
                      <td>1</td>
                      <td contenteditable='true'>Male</td>
                      <td contenteditable='true'>Oluwaseyi&nbsp;Yetunde</td>
                      <td contenteditable='true'>Oluwaseyi.Y@codeware.com</td>
                      <td contenteditable='true'>Asst.&nbsp;Manager</td>
                      <td contenteditable='true'>0803&nbsp;209&nbsp;1372</td>
                      <td contenteditable='true'>Self</td>
                    </tr>
                      <tr class="fs-14">
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                      </tr>
                
                    </tbody> 
                  </table>
                </div>  
               </div>
              </div>
            </div>
        </div>
    )
}

export default CompanyProfile;