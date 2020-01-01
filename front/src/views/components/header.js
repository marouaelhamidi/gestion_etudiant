import React from 'react';
import './header.css';


class Header extends React.Component{
    render(){
        return(
            <div id="page-header" className="bg-gradient-9">
            <div id="mobile-navigation">
                <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
                <a href="index.html" className="logo-content-small" title="MonarchUI"></a>
            </div>
            <div id="header-logo" className="logo-bg">
                <a href="index.html" className="logo-content-big" title="MonarchUI">
                    Monarch <i>UI</i>
                    <span>The perfect solution for user interfaces</span>
                </a>
                <a href="index.html" className="logo-content-small" title="MonarchUI">
                    Monarch <i>UI</i>
                    <span>The perfect solution for user interfaces</span>
                </a>
                <a id="close-sidebar" href="#" title="Close sidebar">
                    <i className="glyph-icon icon-angle-left"></i>
                </a>
            </div>
            <div id="header-nav-left">
                <div className="user-account-btn dropdown">
                    <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                        <span>Thomas Barnes</span>
                        <i className="glyph-icon icon-angle-down"></i>
                    </a>
                    <div className="dropdown-menu float-left">
                        <div className="box-sm">
                            <div className="login-box clearfix">
                                <div className="user-img">
                                    <a href="#" title="" className="change-img">Change photo</a>
                                    <img src="../../assets/image-resources/gravatar.PNG" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <span>
                                        Thomas Barnes
                                        <i>UX/UI developer</i>
                                    </span>
                                    <a href="#" title="Edit profile">Edit profile</a>
                                    <a href="#" title="View notifications">View notifications</a>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <ul className="reset-ul mrg5B">
                                <li>
                                    <a href="#">
                                        <i className="glyph-icon float-right icon-caret-right"></i>
                                        View login page example
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="glyph-icon float-right icon-caret-right"></i>
                                        View lockscreen example
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="glyph-icon float-right icon-caret-right"></i>
                                        View account details
                                        
                                    </a>
                                </li>
                            </ul>
                            <div className="pad5A button-pane button-pane-alt text-center">
                                <a href="#" className="btn display-block font-normal btn-danger">
                                    <i className="glyph-icon icon-power-off"></i>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div id="header-nav-right">
              
 

                <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                    <i className="glyph-icon icon-linecons-lock"></i>
                </a>
        
            </div>
        
        </div>
       
        
        )
    }
}
export default Header;