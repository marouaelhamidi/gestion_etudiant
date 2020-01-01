import React from 'react';


class Users extends React.Component{
    render(){
        return(

            <div id="page-content-wrapper">
            <div id="page-content">              
                    <div className="container">
<div id="page-title">
    <h2>Data tables</h2>
    <p>Tables with a lot of advanced, easy to use features and options.</p>

</div>

<div className="panel">
<div className="panel-body">
<h3 className="title-hero">
    Basic
</h3>
<div className="example-box-wrapper">

    <table cellpadding="0" cellspacing="0" border="0" className="table table-striped table-bordered" id="datatable-example">
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
    <tr className="odd gradeX">
        <td>Trident</td>
        <td>Internet
            Explorer 4.0</td>
        <td>Win 95+</td>
        <td className="center"> 4</td>
        <td className="center">X</td>
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
export default Users;