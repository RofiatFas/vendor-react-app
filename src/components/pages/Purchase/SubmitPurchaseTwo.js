import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileImage, faPrint, faShare, faFile} from '@fortawesome/free-solid-svg-icons';

function SubmitPurchaseTwo(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
            <h5 class="p-3">PO2201001: Supply of Laptops</h5>
            <div class="text-end bid-btns my-5 my-lg-0">
                <a href="#" type="button" class="btn btn-primary navbg shadow border-0 delbtn "><FontAwesomeIcon icon={faPrint} /></a>
                <a href="#" type="button" class="btn btn-primary navbg shadow border-0 delbtn"><FontAwesomeIcon icon={faShare} /></a>
            </div> 
            </div>

            <div class="">
               <div class="row table-responsive">
                 <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" width="">
                   <div class="status-text text-end">
                    <h6>Status: <span class="fs-12 fw-normal">Pending</span></h6>
                   </div>

                   <table class="table reciept-table table-bordered mx-3">
                   <thead class="">
                       <tr class="bg4" width="20">
                         <th>
                         <h2 class="text-center text-white fs-4">PURCHASE ORDER</h2> 
                           <div class="row">
                             <div class="col-md-4 text-white" contenteditable='true'>
                                 <p> &lt;Company Name&gt;<br/>  
                                    &lt;Street Address&gt;<br/>   
                                    &lt;City&gt;,&lt;State&gt;&lt;Zip&gt;</p>
                              </div>
                             <div class="col-md-2 mx-5 justify-content-right align-items-right text-end col-lg-4 text-white" contenteditable='true'>
                                <p>PO Number:<br/>
                                 PO Date:<br/>
                                 Vendor ID:</p>
                             </div>
                             <div class="col-md-2 mx-4 justify-content-right align-items-right text-end text-white" contenteditable='true'>
                                 <p> &lt;12345&gt;<br/>  
                                     &lt;7/15/2009&gt;<br/>
                                     &lt;VendorID&gt;
                                 </p>
                             </div>
                            </div>
                         </th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td class="text-dark d-flex bg5" height="30">
                           <h6>Purchase From:</h6>
                           <h6 class="ship-text ">Ship To:</h6>
                         </td>
                       </tr>
                       <tr>
                         <td contenteditable='true'>
                           <div class="d-flex fs-14">
                             <p class="mx-4"> &lt;Vendor Name&gt;<br/>  
                               &lt;Vendor Street Address&gt;<br/>   
                               &lt;City&gt;,&lt;State&gt;&lt;Zip&gt; <br/>
                               <br/>
                               <span class="fnt-6">Contact Name:</span> <br/>&lt;Name&gt;
                             </p>
      
                             <p class="ship-text"> &lt;Company Name&gt;<br/>  
                               &lt;Company Street Address&gt;<br/>   
                               &lt;City&gt;,&lt;State&gt;&lt;Zip&gt; <br/>
                               <br/> 
                               <span class="fnt-6">Contact Name:</span> <br/>&lt;Name&gt;
                             </p>
                             </div>
                             </td> 
                         </tr>
                         <tr>
                          <td class="purchase-from d-flex justify-content-evenly bg5" height="30">   
                             <h6>Shipping&nbsp;Method</h6>
                             <h6 style={{marginLeft: "-30px"}}>Payment&nbsp;Terms</h6>
                             <h6 >Required&nbsp;by&nbsp;date</h6>
                         </td>
                         </tr>
                         <tr>
                           <tr>
                             <td class=" d-flex justify-content-evenly" contenteditable='true' height="30">
                               <p class="ups-text">&lt;UPS&gt;</p>  
                               <div class="vl mb-5"></div>         
                               <p>&lt;Net 30 Days&gt;</p>
                               <div class="vl mb-5"></div>
                               <p>&lt;Date&gt;</p>
                               <div class="vl1 mb-5"></div>
                             </td>
                           </tr>
                         </tr>
                         <tr>
                          <td>
                            <table class="table table-borderless">
                              <thead class="bg5" height="30">
                              <th class="wi-" style={{width: '40%'}}>Item Description</th>
                              <th class="wi-60" style={{width: '30%'}}>Quantity</th>
                              <th  class="wi-10">Unit Price</th>
                              <th  class="wi-10">Amount</th>
                              </thead>
                              <tr>
                                <td contenteditable='true'>
                                  <ul class="list-unstyled">
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                    <li>&lt;Item 1&gt;</li>
                                  </ul>
                                </td>
                                <td contenteditable='true'></td>
                                <td contenteditable='true'></td>
                                <td contenteditable='true'></td>
                              </tr>
                            </table>
                          </td>
                         </tr>
                         
                         <tr>
                           <td contenteditable='true'>
                            <div class="row mx-3">
                              <div class="col-md-8  mt-3">
                                <h6>Approved By: </h6>
                                <div class="d-flex">
                                  <p>X </p>
                                  <hr size="3" width="50%" class="mx-3" contenteditable='true'/>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <p class="d-flex flex-column mx-5">Subtotal $ 
                               <br/>Freight 
                               <br/>Sales Tax
                             <span class="fw-bold">Order Total </span></p>
                              </div>
                            </div>
                           </td>
                         </tr>
                   </tbody>
                   </table>
                 </div>

                 <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 table-responsive">
                  <h5 class="fs-14 mx-2">Comment</h5>
                  <table class="table rounded-3 w-20 comment-table bg2 mx-2" height="" contenteditable='true' >
                      <tbody>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      </tbody>
                   </table>
                    <div class="buttons mx-2">
                      <div class="mb-3">
                      <button class="button save-btn text-white border-0 p-2 rounded-3">Save Comment</button>
                    </div>
                    <div class=" mb-3">
                      <button class="button del2-btn text-white border-0 p-2 rounded-3">Delete Comment</button>
                    </div>
                    <div class="mb-">
                      <button class="button view-btn text-white border-0 p-2 rounded-3" data-bs-toggle="modal" href="#modal2">View Comment&gt </button>
                    </div>
                  </div>

                  <div class="bg2 my-2 rounded-3 mx-2 download-tb">
                    <div class="row mb-2">
                      <div class="col-md-2 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down-fill mx-3" viewBox="0 0 16 16">
                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                      </svg></div>
                      <div class="col-md-8 my-2 fs-14">Files</div>
                      <div class="col-md-2  my-2"></div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-md-2"><i class="fa-solid fa-file mx-3 comment-icon"></i><FontAwesomeIcon icon={faFile}/></div>
                      <div class="col-md-8 fs-14">Document1.pdf <br/>2m ago <span class="fs-14 mx-5"><a href="#" class="link-info text-decoration-none">Preview</a></span></div>
                      <div class="col-md-2 fs-11">5.7MB</div>
                    </div>
                    <div class="row mb-5">
                      <div class="col-md-2"><i class="fa-solid fa-file-image mx-3 comment-icon"></i><FontAwesomeIcon icon={faFileImage} /></div>
                      <div class="col-md-8 fs-14">Document2.png<br/>2m ago <span class="fs-14 mx-5"><a href="#" class="link-info text-decoration-none">Preview</a></span></div>
                      <div class="col-md-2 mb-3 fs-11">2.7MB</div>
                    </div>
                  </div>
                
                  <div class="">
                  <ul class="list-unstyled">
                  <hr class="wybiline mx-3"/>
                  <li class="fs-14"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down-fill mx-3" viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                    </svg>Waybill*</li>
                     <hr class="wybiline mx-3"/>
                     <li class="fs-14"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down-fill mx-3" viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                    </svg>Invoice*</li>
                     <hr class="wybiline mx-3"/>
                     <li class="fs-14"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down-fill mx-3" viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                    </svg>Payment Receipt*</li>
                     <hr class="wybiline mx-3"/>
                     <li class="fs-14"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down-fill mx-3" viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                    </svg>Certificate of Completion*</li>
                  </ul>
                  </div>

                </div>
               </div>
            </div>

            <div class="container-fluid">
             <div class="modal fade" id="modal2" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered modal-dialog-centered comment-modl">
                 <div class="modal-content">
                  <div class="modal-header pl-5 border-0">
                    <h5 class="modal-title fs-4" id="modal2">Comments Feed</h5>
                  </div>

                  <div class="modal-body pl-5">
                    <h4 class="fs-18">Jane Cooper</h4>
                    <p class="fw-600 fs-12">
                       Lorem ipsum dolor sit amet 
                       consectetur adipisicing elit. Rerum nesciunt 
                       facilis eligendi voluptates.Harum delectus voluptatem cumque, aliquam qui quidem.
                       facilis eligendi voluptates. 
                       Harum delectus voluptatem cumque, aliquam qui quidem.
                    </p>
                    <small class='fs-12'>02 January,2022.  12:45PM</small>
                     <hr class="pop-line bg-dark"/>
                     <h4 style={{fontSize: '18px'}}>Devon Lane</h4>
                     <p class="fw-600 fs-12">
                         Lorem ipsum dolor sit amet 
                         consectetur adipisicing elit. Rerum nesciunt 
                         facilis eligendi voluptates.Harum delectus voluptatem cumque, aliquam qui quidem.
                          facilis eligendi voluptates. 
                         Harum delectus voluptatem cumque, aliquam qui quidem.
                     </p>
                     <small class='fs-12'>02 January,2022.  12:45PM</small>
                     <hr class="pop-line bg-dark"/>
                     <h4 style={{fontSize: '18px'}}>Eleanor Pena</h4>
                     <p  class="fw-600 fs-12">
                         Lorem ipsum dolor sit amet 
                         consectetur adipisicing elit. Rerum nesciunt 
                         facilis eligendi voluptates.Harum delectus voluptatem cumque, aliquam qui quidem.
                          facilis eligendi voluptates. 
                         Harum delectus voluptatem cumque, aliquam qui quidem.
                     </p>
                     <small class='fs-12'>02 January,2022.  12:45PM</small>
                      <hr class="pop-line bg-dark"/>
                      <h4 style={{fontSize: '18px'}}>Savannah Nguyen</h4>
                      <p class="fw-600 fs-12">
                          Lorem ipsum dolor sit amet 
                          consectetur adipisicing elit. Rerum nesciunt 
                          facilis eligendi voluptates.Harum delectus voluptatem cumque, aliquam qui quidem.
                           facilis eligendi voluptates. 
                          Harum delectus voluptatem cumque, aliquam qui quidem.
                      </p>
                      <small class='fs-12'>02 January,2022.  12:45PM</small>
                      <hr class="pop-line bg-dark"/>

                      <div class=" d-flex justify-content-end text-end float-end ">
                        <a href="#" type="button" class="btn btn-secondary navbg bckmodl-btn shadow" data-bs-dismiss="modal" > Back</a>
                       </div>
                  </div>
                 </div>
               </div>
             </div>
             </div>


        </div>

    )
}

export default SubmitPurchaseTwo;
