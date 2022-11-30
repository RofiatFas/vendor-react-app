import React from "react";
import '../../../App.css';
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';

function Notification(){
    return(
        <div>
            <Navbar />

            <div class="container-fluid bg2">
            <h5 class="p-3">Notifications</h5>
             <a href="#" type="button" class="btn btn-primary bg1 float-end shadow border-0 delbtn">Delete</a>
           </div>

           <div class="table-responsive container-fluid mt-3">
            <table class="table table-bordered">
                <thead class="table-light">
                  <th><input type="checkbox" id="checkbox"/></th>
                  <th>S/N</th>
                  <th>MESSAGES</th>
                  <th>DATES & TIME</th>
                </thead>
            
                <tbody> 
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td contenteditable='true'><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="checkbox"/></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                  <td contenteditable='true'></td>
                </tr>
                </tbody> 
              </table>
        </div>
        </div>
    )
}

export default Notification;