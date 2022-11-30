import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload,faPrint} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function RequestTwo(){
    return(
        <div>
            <Navbar/>
            {/* <!-- Bid Invitation Details --> */}
          <div class="container-fluid bid-detils">
            <h5 class="p-3">Bid Invitation Details</h5>
            <div class="text-end bid-btns">
              <a href="#modal2"data-bs-toggle="modal"  type="button" class="btn btn-primary navbg shadow border-0 delbtn">Accept</a>
              <a href="#" type="button" class="btn btn-primary bg-white btn2 shadow border-0 delbtn">Reject</a>
              <Link to='/submitrequesttwo' type="button" class="btn btn-primary navbg shadow border-0 delbtn">Submit&nbsp;Purchase&nbsp;Quote</Link>
              <a href="#" type="button" class="btn btn-primary navbg shadow border-0 delbtn"><FontAwesomeIcon icon={faPrint}/></a>
              <a href="#" type="button" class="btn btn-primary navbg shadow border-0 delbtn"><FontAwesomeIcon icon={faDownload}/></a>
            </div> 
        </div>

        <div class="contianer-fliud-md p-3 mt-3">
          <div class="mb-3">
            <button class="btn btn-primary navbg w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <div class="d-flex justify-content-between">
                <h3 class="mb-0 text-white fs-5">General</h3>
                <span class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-white" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </span>
              </div>
            </button>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <table class="table-bordered bg-white accord-tb" >
                  <tbody>
                    <tr style={{height: "40px !important;"}}>
                      <td width="50">RFQ No: RFQ21002</td>
                      <td class="bg2" width="50">Office Use:</td>
                    </tr>
                    <tr style={{height: "40px !important;"}}>
                      <td contenteditable='true'>Date: 20/03/2023</td>
                      <td contenteditable='true'>PO Number:</td>
                    </tr>
                    <tr style={{height: "40px !important;"}}>
                      <td contenteditable='true'>Requester:</td>
                      <td contenteditable='true'>Date:</td>
                    </tr>
                    <tr style={{height: "40px !important"}}>
                      <td contenteditable='true'>Unit:</td>
                      <td contenteditable='true'>Requisition Status: New | Pending | Submitted | Compared | Finalized</td>
                    </tr>
                    <tr style={{height: "40px !important"}}>
                      <td contenteditable='true'>Department:</td>
                      <td contenteditable='true'></td>
                    </tr>
                  </tbody>
                </table>
  
                <div class="table-responsive">
                  <table class="table-bordered bg-white mt-5 accord-tb" >
                    <tbody>
                        <tr>
                            <td class="bg2">Description</td>
                        </tr>
                        <tr style={{height: "200px"}}>
                            <td class="bg-white" contenteditable='true'></td>
                        </tr>
                    </tbody>
                  </table>
                </div>  
              </div>
            </div>
          </div>

          <div class="">
            <button class="btn btn-primary navbg w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#rfqLine" aria-expanded="false" aria-controls="collapseExample">
              <div class="d-flex justify-content-between">
                <h3 class="mb-0 text-white fs-5">RFQ Line</h3>
                <span class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-white" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </span>
              </div>
            </button>
            <div class="collapse" id="rfqLine">
              <div class="card card-body">
                <table class="table-bordered bg-white accord-tb" >
                  <tbody>
                      <thead class="bg3">
                          <th>QUALITY </th>
                          <th>UNIT COST </th>
                          <th>TOTAL COST</th>
                          <th>DESCRIPTION OF SERVICE OR MATERIAL</th>
                      </thead>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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


          <div class="container-fluid">
            <div class="modal fade" id="modal2" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="color-green justify-content-center text-center my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h5 class="text-center color-green my-2" id="modal2">Congratulation</h5>
                   <h6 class="text-center fw-600  mb-1 fs-6 my-2" >Request Order Accepted</h6>
                   <div class="d-flex justify-content-center">
                   <Link to='/request' type="button" class="btn btn-secondary continue-btn shadow navbg mt-4 mb-3 p-2" > Continue</Link>
                   </div>
                  </div>
                </div>
              </div>
            </div>
         </div> 
        </div>
    )
}

export default RequestTwo;