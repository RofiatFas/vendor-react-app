import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';

function Purchase(){
    return(
        <div>
            <Navbar/>

            <div class="container-fluid bg2">
            <h5 class="p-3">Purchase Order</h5>
            </div>

            <div class="container-fluid requestbid">
            <div class="row mt-3">
              <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 mx-3 rounded bid1 ">
                <div class="card text-white mb-3 mt-3 border-0 mx-2 cardwidth">
                    <div class="card-body rounded bg1">
                      <p class="card-title fs-5">Accepted</p>
                      <p class="card-text mt-3 fw-bold fs-3">25</p>
                    </div>
                  </div>
                  <div class="card text-white mb-3 mt-3 border-0 mx-2 cardwidth">
                    <div class="card-body rounded bg1">
                      <p class="card-title fs-5">Rejected</p>
                      <p class="card-text mt-3 fw-bold fs-3">10</p>
                    </div>
                  </div>
                  <div class="card text-white mb-3 mt-3 border-0 mx-2 cardwidth">
                    <div class="card-body rounded bg1">
                      <p class="card-title fs-5">Pending</p>
                      <p class="card-text mt-3 fw-bold fs-3">5</p>
                    </div>
                  </div>
                  <div class="mx-2">
                    <div class="filter rounded-3 mb-3 mt-2">
                      <p class=" fs-5 fw-500 mb-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter mx-2" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                      </svg>Filter</p>
                    </div>
                    <form class="w-80">
                      <div class="form-group mb-3">
                        <label class="fw-bold">Status</label>
                        <select class="form-select">
                          <option class="" hidden>Any</option>
                          <option value="1">Accepted</option>
                          <option value="2">Rejected</option>
                          <option value="3">Submitted</option>
                          <option value="4">Pending</option>
                        </select>
                      </div>
                      <div class="form-group mb-3">
                        <label class="fw-bold">Date Range</label>
                        <select class="form-select">
                          <option class="" hidden>Any</option>
                          <option value="1">Accepted</option>
                          <option value="2">Rejected</option>
                          <option value="3">Submitted</option>
                          <option value="4">Pending</option>
                        </select>
                      </div>
                      <div class="form-group mb-3">
                        <label class="fw-bold">Bid Value</label>
                        <select class="form-select">
                          <option class="" hidden>Any</option>
                          <option value="1">Accepted</option>
                          <option value="2">Rejected</option>
                          <option value="3">Submitted</option>
                          <option value="4">Pending</option>
                        </select>
                      </div>
                      <div class="float-end mb-5">
                        <a href="#" type="button" class="btn btn-sm px-3 text-white shadow btn1 fw-bold" > Apply</a>
                      </div>
                    </form>
                  </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 table-responsive">
                <table id="customers" class="table table-bordered">
                    <thead class="table-light">
                        <th><input type="checkbox" id="checkbox"/></th>
                        <th>PURCHASE CODE</th>
                        <th>POSTING DESCRIPTION</th>
                        <th>POSTING DATE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                        <th><FontAwesomeIcon icon={faEye} /></th>
                      </thead>
                  
                      <tbody> 
                          <tr>
                              <td contenteditable='true'><input type="checkbox" id="checkbox"/></td>
                              <td><Link to='/purchasetwo' class="link">PO423547</Link></td>
                              <td contenteditable='true'>Supply of Laptops</td>
                              <td contenteditable='true'>2022-01-28</td>
                              <td contenteditable='true'>2022-02-05</td>
                              <td contenteditable='true'>Accepted</td>
                              <td><Link to='/purchasetwo' class="link"><FontAwesomeIcon icon={faEye} /></Link></td>
                            </tr>
                            <tr>
                              <td><input type="checkbox" id="checkbox"/></td>
                              <td contenteditable='true'></td>
                              <td contenteditable='true'></td>
                              <td contenteditable='true'></td>
                              <td contenteditable='true'></td>
                              <td contenteditable='true'></td>
                              <td><FontAwesomeIcon icon={faEye} /></td>
                            </tr>
                      </tbody> 
                  </table>
              </div>
            </div>
            </div>
        </div>

    )
}

export default Purchase;