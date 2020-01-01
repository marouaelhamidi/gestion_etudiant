import React from 'react';

import './login.css';

class Singin extends React.Component{
    render(){
        return(
     
            <div className="center-vertical">
            <div className="center-content row">
        
                <form action="#" id="login-validation" className="col-md-4 col-sm-5 col-xs-11 col-lg-3 center-margin" method="">
                    <h3 className="text-center pad25B font-gray text-transform-upr font-size-23">ESTE MANAGEMENT</h3>
                    <div id="login-form" className="content-box bg-default">
                        <div className="content-box-wrapper pad20A">
                            <img className="mrg25B center-margin radius-all-100 display-block" src="../../assets/image-resources/gravatar.PNG" alt=""></img>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon addon-inside bg-gray">
                                        <i className="glyph-icon icon-envelope-o"></i>
                                    </span>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon addon-inside bg-gray">
                                        <i className="glyph-icon icon-unlock-alt"></i>
                                    </span>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block btn-primary">Login</button>
                            </div>
               
                        </div>
                    </div>
        
                    <div id="login-forgot" className="content-box bg-default hide">
                        <div className="content-box-wrapper pad20A">
        
                            <div className="form-group">
                                <label for="exampleInputEmail2">Email address:</label>
                                <div className="input-group">
                                    <span className="input-group-addon addon-inside bg-gray">
                                        <i className="glyph-icon icon-envelope-o"></i>
                                    </span>
                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email"/>
                                </div>
                            </div>
                        </div>
                        <div className="button-pane text-center">
                            <button type="submit" className="btn btn-md btn-primary">Recover Password</button>
                            <a href="#" className="btn btn-md btn-link switch-button" switch-target="#login-form" switch-parent="#login-forgot" title="Cancel">Cancel</a>
                        </div>
                    </div>
    
                </form>
        
            </div>
        </div>
        
       
        
        )
    }
}
export default Singin;