import React from 'react';
import { Link } from 'react-router-dom';

const footer= () => (
  <footer className="footer-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Marketplace</h5>
                            <ul>
                                <li><Link to="/marketplace">Decentralized Marketplace</Link></li>
                                <li><Link to="/videos">Portdex Videos</Link></li>
                                <li><Link to="/tokenEconomy">Token Economy</Link></li>
                                <li><Link to="">Sell Product</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/products">Product</Link></li>
                                {/* <li><Link to="/community">Community</Link></li> */}
                                
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Resources</h5>
                            <ul>
                                <li><Link to="">Help Center</Link></li>
                                <li><Link to="">Partners</Link></li>
                                <li><Link to="">Suggestions</Link></li>
                                <li><Link to="">Discord</Link></li>
                                <li><Link to="">Docs</Link></li>
                                <li><Link to="">Newsletter</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-md-4 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Community</h5>
                            <ul>
                                <li><Link to="/community">Community</Link></li>
                                {/* <li><Link to="">Documentation</Link></li>
                                <li><Link to="">Brand Assets</Link></li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">Forum</Link></li>
                                <li><Link to="">Mailing List</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-1">
                        <div className="widget m-0">
                            <h5>Newsletter</h5>
                            <p>Signup for our newsletter to get the latest news in your inbox.</p>
                            <form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> 
                                    <Link to="" id="btn-subscribe">
                                      <i className="arrow_right bg-color-secondary"></i>
                                    </Link>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don't spam.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col mb-3">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <img alt="" className="f-logo d-1" src="./img/code_logo.png" />
                                        <img alt="" className="f-logo d-3" src="./img/code_logo.png" />
                                        <img alt="" className="f-logo d-4" src="./img/code_logo.png" />
                                        {/* <span className="copy">&copy; Copyright 2021 - Gigaland by Designesia</span> */}
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/Portdex/" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                        <a href="https://twitter.com/portdex" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/company/portdex/" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;