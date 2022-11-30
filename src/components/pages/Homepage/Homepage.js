import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilePen, faTriangleExclamation, faCircleXmark, faFolder, faFolderOpen, faFileCircleCheck, faFileCircleXmark, faMessage} from '@fortawesome/free-solid-svg-icons'
import Donut1 from "../../Charts/Donuts/Donut1";
import Donut2 from "../../Charts/Donuts/Donut2";
import Donut3 from "../../Charts/Donuts/Donut3";
import Donut4 from "../../Charts/Donuts/Donut4";
import Donut5 from "../../Charts/Donuts/Donut5";
import PieChart from "../../Charts/PieChart";

function Homepage(){
    return(
        <div>
            <Navbar />
            {/* <!-- Activity Cues Strt --> */}
          <div class="container-fluid">
            <div class="row">
              <h5 class="mb-2 mx-2 mt-2">Activity Cues</h5>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">

                <div class="row gx-3">
                  <div class="col-6 col-sm-4 col-md-3" id="col">
                    <div class="card border-0 h-100" id="cardOne">
                      <div class="card-body color1 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faFilePen} />54</h5>
                      <p class="card-text">Quotes</p>
                      <a href="request.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3" id="col">
                    <div class="card border-0 h-100" id="cardTwo">
                      <div class="card-body color2 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faTriangleExclamation} /> 54</h5>
                      <p class="card-text">Pending Quotes</p>
                      <a href="request.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 my-2 my-lg-0" id="col">
                    <div class="card border-0 h-100" id="cardThree">
                      <div class="card-body color3 rounded-3">
                      <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 54</h5>
                      <p class="card-text">Approved Quotes</p>
                      <a href="request.html" class="stretched-link"></a>
                      </div>
                      </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 my-2 my-lg-0" id="col">
                    <div class="card border-0 h-100" id="cardFour">
                      <div class="card-body color4 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faCircleXmark} /> 54</h5>
                      <p class="card-text">Rejected Quotes</p>
                      <a href="request.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row my-2 gx-3">
                  <div class="col-6 col-sm-4 col-md-3" id="col">
                    <div class="card border-0 h-100" id="cardOne">
                      <div class="card-body color1 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faFolder} /> 54</h5>
                      <p class="card-text">Purchase Orders</p>
                      <a href="purchse.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3" id="col">
                    <div class="card border-0 h-100" id="cardTwo">
                      <div class="card-body color2 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faFolderOpen} /> 54</h5>
                      <p class="card-text">Opened Purchase Orders</p>
                      <a href="purchse.html" class="stretched-link"></a>
                      </div>
                      </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 my-2 my-lg-0" id="col">
                    <div class="card border-0 h-100" id="cardThree">
                      <div class="card-body color3 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faFileCircleCheck} /> 54</h5>
                      <p class="card-text">Accepted Purchase Orders</p>
                      <a href="purchse.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 my-2 my-lg-0" id="col">
                    <div class="card border-0 h-100" id="cardFour">
                      <div class="card-body color4 rounded-3">
                      <h5 class="card-title"><FontAwesomeIcon icon= {faFileCircleXmark} />54</h5>
                      <p class="card-text">Closed Purchase Orders</p>
                      <a href="purchse.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 ">
                <div class="card shadow bg-white h-100">
                  <div class="card-body">
                    <div class="">
                      <p class="mx-1 fs-12"><FontAwesomeIcon icon= {faMessage} class="mx-3 text-primary" style={{width: "20px"}} />Vendor portal <span class="fw-bold fs-6">.</span> now</p>
                      <h4 class="mx-5 fs-6">New Notification</h4>
                      <p class="mx-5 fs-12">Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim... Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim... </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Supplier Start --> */}

          <div class="container mx-3 my-2">
            <h5 class="mt-2">Supplier Compliance Stats</h5>
            <div class="row justify-content-between p-2 gx-2">
              <div class="col-12 col-sm-12 col-md-12 col-lg-2 chartbox my-2 my-lg-0" style={{marginLeft: '-50px'}}>
                <Donut1/>
                {/* <canvas class="chartDoughnut" id="myChart" width="400" height="500"></canvas> */}
              </div>
      
              <div class="col-12 col-sm-12 col-md-12 col-lg-2 chartbox my-2 my-lg-0" style={{marginLeft: '-50px'}}>
              <Donut2/>
                {/* <canvas class="chartDoughnut"  id="myChart1"></canvas> */}
              </div>
      
              <div class="col-12 col-sm-12 col-md-12 col-lg-2 chartbox my-2 my-lg-0" style={{marginLeft: '-50px'}}>
              <Donut3/>
                {/* <canvas class="chartDoughnut"  id="myChart2"></canvas> */}
              </div>
      
              <div class="col-12 col-sm-12 col-md-12 col-lg-2 chartbox my-2 my-lg-0" style={{marginLeft: '-50px'}}>
              <Donut4/>
                {/* <canvas class="chartDoughnut"  id="myChart3"></canvas> */}
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-2 chartbox my-2 my-lg-0" style={{marginLeft: '-50px'}}>
              <Donut5/>
                {/* <canvas class="chartDoughnut"  id="myChart3"></canvas> */}
              </div>
      
              {/* <div class="col-6 col-sm-2 chartbox my-2 my-lg-0">
                <canvas class="chartDoughnut"  id="myChart4"></canvas>
              </div> */}
            </div>
          </div>

          {/* <!-- Recent Activities Start --> */}
          <div class="container-fluid">
            <div class="row">
              <h5 class="mt-2 mb-3">Recent Activities</h5>
              <div class="col-sm-12 col-md-8 text-dark">
                <div class="table-responsive">
                  <table class="table">
                    <tr>
                      <th>Activities</th>
                      <th>Purchase Code</th>
                      <th>Status</th>
                      <th>Dates</th>
                      <th>Bidding</th>
                    </tr>
                    <tr>
                      <td class="text-black">Supplies of Stationaries<span class="fs-12"><br/>JaneDoe</span></td>
                      <td  contenteditable='true' class="text-black-50">Ed12456</td>
                      <td  contenteditable='true' class="text-black-50">Pending</td>
                      <td  contenteditable='true' class="text-black-50">04/02/2022</td>
                      <td  contenteditable='true' class="text-black-50">$2,500</td>
                    </tr>
                    <tr>
                      <td>Supplies of Printers<span class="fs-12"><br/>JaneDoe</span></td>
                      <td contenteditable='true'></td>
                      <td contenteditable='true'></td>
                      <td contenteditable='true'></td>
                      <td contenteditable='true'></td>
                    </tr>
                    <tr>
                      <td>Supplies of Laptops<span class="fs-12"><br/>JaneDoe</span></td>
                      <td  contenteditable='true'></td>
                      <td  contenteditable='true'></td>
                      <td  contenteditable='true'></td>
                      <td  contenteditable='true'></td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="col-sm-12 col-md-4">
                {/* <!-- Charts --> */}
                <h5 class="mt-1 px-5">Fill Rate Chart</h5>
                <div class="chrtpie">
                  <PieChart/>
                  {/* <canvas id="myChart5" class="mx-5" width="100" height="200" style={{marginTop: "-20px"}}>canvas</canvas> */}
                </div>  
            </div>
            </div>
          </div>
        </div>
    )
}

export default Homepage;
