import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../dashboard/dashboard';
import Users from '../users/list';
import Etudiants from '../etudiants/list';
import Professeur from '../professeur/list';
import Modules from '../modules/list';
import Fillieres from '../fillieres/list';


class Sidebar extends React.Component{
    render(){
        return(
            <Router>
            <div id="page-sidebar">
            <div class="scroll-sidebar">
                
        
            <ul id="sidebar-menu">
            <li class="header"><span>Overview</span></li>
         

            <li>
                <Link to="/">
                    <span>Admin dashboard</span></Link>
        
            </li>
            <li>
           
                <Link to="/etudiants">
                    <span>Gestion des étudiants</span></Link>
              
            </li>
            <li>
           
                <Link to="/modules">
                    <span>Gestion des modules</span></Link>
              
            </li>
            <li>
           
                <Link to="/professeurs">
                    <span>gestion des professeurs</span></Link>

            </li>
            <li>
           
                <Link to="/users">
                    <span>Gestion des utilisateur</span></Link>
              
            </li>
            <li>
           
                <Link to="/absences">
                    <span>gestion des absence</span></Link>
              
            </li>  

           </ul>
                </div>
           
            </div>
            
            <Route  exact path="/" component={Dashboard} />              
            <Route  path="/users" component={Users} />      
            <Route  path="/etudiants" component={Etudiants} />  
            <Route  path="/professeurs" component={Professeur} />  
            <Route  path="/absences" component={Dashboard} />            
            <Route  path="/modules" component={Modules} />
            <Route  path="/fillieres" component={Fillieres} />                         
            </Router>
        )
    }
}
export default Sidebar;