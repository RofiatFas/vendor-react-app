import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";


function Issue(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
            <h5 class="p-3">Complaint Form</h5>
            </div>

            <div class="container-fluid formcon mb-5 bg2 rounded mx-2"> 
            <div class="contact-form mb-1 col-lg-8 col-sm-6">
             <h5 class="fs-6 p-2">Please fill out the following form with your complaint. We will review your request and follow up with you <br/> soon 
              as possible.</h5>
        
               <form class="row g-3 formBox mb-50  d-flex-justify-content-center p-2">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">First Name</label>
                  <input type="email" placeholder="First Name" class="form-control text-muted" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="password" placeholder="Last Name" class="form-control text-muted" id="inputPassword4"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Email Address</label>
                  <input type="text" class="form-control text-muted" id="inputAddress" placeholder="Email Address"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Phone Number</label>
                  <input type="text" class="form-control text-muted" id="inputAddress2" placeholder="Phone Number"/>
                </div>
                <div class="col-md-12">
                  <label for="inputState" class="form-label">Reason For Complaint</label>
                  <select id="inputState" class="form-select">
                    <option selected class="text-muted">Choose your reason for contacting us</option>
                    <option>Late Supply</option>
                    <option>Payment Status</option>
                    <option>Product Quality</option>
                    <option>Others</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="inputZip" class="form-label">Please&nbsp;provide&nbsp;any&nbsp;details</label>
                  <textarea class="form-control issue-textre" placeholder="Please provide any details"></textarea>
                </div>
                <div >
                  <button type="submit" class="btn btn-primary btn1 mb-5 shadow border-0">Submit</button>
                  <button type="submit" class="btn btn-primary bg-white btn2 mb-5 shadow border-0 mx-2">Cancel</button>
                </div>
              </form>
            </div>
          </div> 
        </div>
    )
}

export default Issue;