import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faPlusCircle, faBell, faUser, faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return(
        <div >
    {/* <!-- Navbar Strt --> */}
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div class="container-fluid">
    <Link to='/homepage' class="navbar-brand"> <FontAwesomeIcon icon={faHome} class="mx-2" style={{width: '20px', marginTop: "-5px"}}/> VENDOR PORTAL</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faPlusCircle} class="mx-2" style={{width: '20px', marginTop: "-5px"}}/>
          </a>
          <ul class="dropdown-menu bg-dark text-white mt-2" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item text-white nvlink fs-12" data-bs-toggle="modal" href="#modal1">Waybill</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item text-white nvlink fs-12" data-bs-toggle="modal" href="#modal1">Invoice</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item text-white nvlink fs-12" data-bs-toggle="modal" href="#modal1">Payment Reciept</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item text-white nvlink fs-12" data-bs-toggle="modal" href="#modal1">Certificate of<br/> Completion</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/addnewuser' class="dropdown-item text-white nvlink fs-12" href="Addnewuser.html">Add new user</Link></li>
          </ul>
        </li>
        <li class="nav-item mx-2">
          <Link to='/notification' class="nav-link" id="navbarDropdown" role="button" aria-expanded="false">
          <FontAwesomeIcon icon={faBell} class="mx-2 text-white" style={{width: '15px', marginTop: "-5px"}}/>
          </Link>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faUser} class="mx-2" style={{width: '15px', marginTop: "-5px"}}/>
          </a>
          <ul class="dropdown-menu bg-dark text-white dropdown-menu-end mt-2" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to='/companyprofile' class="dropdown-item text-white nvlink fs-12">Company Profile</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/profile' class="dropdown-item text-white nvlink fs-12">User Profile</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/changepassword' class="dropdown-item text-white nvlink fs-12">Change Password</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/login' class="dropdown-item text-white nvlink fs-12">Sign Out</Link></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>
           </nav>
    {/* <!-- Navbar End --> */}

    {/* Second Nav */}
         <div class="second-nav navbg">
             <div class="container-fluid">
      <div class="navbar navbar-expand-lg navbar-secondary">
        <button class="navbar-toggler menu-navs text-white float-end my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i><FontAwesomeIcon icon={faBars} style={{width: '20px'}}/>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item">
              <Link to='/homepage' class="nav-link active text-white fw-600" aria-current="page" href="dshbord.html">DASHBOARD</Link>
            </li>
            <li class="nav-item">
              <Link to='/request' class="nav-link color-nv" aria-current="page">REQUEST FOR QOUTES</Link>
            </li>
            <li class="nav-item">
              <Link to='/purchase' class="nav-link color-nv ">PURCHASE ORDER</Link>
            </li>
            <li class="nav-item">
              <Link to='/issue' class="nav-link color-nv" >ISSUE RESOLUTION</Link>
            </li>
            <li class="nav-item">
              <Link to='/report' class="nav-link color-nv" >REPORT</Link>
            </li>
            <li class="nav-item">
              <Link to='/profile' class="nav-link color-nv" >PROFILE</Link>
            </li>
          </ul>
        </div>
      </div>
             </div>
         </div>

         <div class="container-fluid">
            <div class="modal fade" id="modal1" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered selectmodl modal-sm">
                <div class="modal-content">
                  <div class="modal-body text-center">
                    <h5 class="modal-title mt-2 mb-2" id="modal1">Select Purchase Order</h5>
                    <div class="dropdown d-flex justify-content-center">
                      <select class="form-select mt-3 selectpurchsemodl" aria-label="Default select example">
                        <option value="" selected disabled hidden class="fs-12">Purchase Order Code</option>
                        <option value="1">Accepted</option>
                        <option value="2">Rejected</option>
                        <option value="3">Submitted</option>
                        <option value="4">Pending</option>
                      </select>
                    </div>
                    <div class="">
                    <Link to='/purchasetwo' type="button" class="btn btn-secondary continue-btn mt-4 mb-3 navbg continue-btn shadow p-2" width="" > Continue</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>
    )
}

export default Navbar;
