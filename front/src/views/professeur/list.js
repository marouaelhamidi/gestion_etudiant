import React from 'react';
import Dashboard from '../dashboard/dashboard';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Professeur extends React.Component{
    render(){
        return(
            <div id="page-content-wrapper">
            <div id="page-content">
                
                    <div className="container">
<div id="page-title">
    <h2>Data tables</h2>
    <p>Tables with a lot of advanced, easy to use features and options.</p>

</div>

<div class="panel">
<div class="panel-body">
<h3 class="title-hero">
    Basic
</h3>
<div class="example-box-wrapper">

    <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="datatable-example">
    <thead>
    <tr>
        <th>Rendering engine</th>
        <th>Browser</th>
        <th>Platform(s)</th>
        <th>Engine version</th>
        <th>CSS grade</th>
    </tr>
    </thead>
    <tbody>
    <tr class="odd gradeX">
        <td>Trident</td>
        <td>Internet
            Explorer 4.0</td>
        <td>Win 95+</td>
        <td class="center"> 4</td>
        <td class="center">X</td>
    </tr>
  

</tbody>

</table>
</div>
</div>
</div>
             </div></div>
         </div>
       
        )
    }
}
export default Professeur;