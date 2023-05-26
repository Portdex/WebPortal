import React from 'react';
import { Link } from 'react-router-dom';

const footer= () => (
  <footer className="footer-light p-0">
            <div className="container">
                <div className="row">
                <div className="subfooter m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col mb-3">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <img alt="" className="f-logo d-1" src="/img/code_logo.png" />
                                        <img alt="" className="f-logo d-3" src="/img/code_logo.png" />
                                        <img alt="" className="f-logo d-4" src="/img/code_logo.png" />
                                        {/* <span className="copy">&copy; Copyright 2021 - Gigaland by Designesia</span> */}
                                    </span>
                                </div>
                                {/* <div className="de-flex-col">
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/Portdex/" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                        <a href="https://twitter.com/portdex" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/company/portdex/" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
                                        
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Marketplace</h5>
                            <ul>
                                <li><Link to="/marketplace">Freelancers Governed – Web 3.0 Marketplace</Link></li>
                                <li><Link to="/videos">Portdex Videos</Link></li>
                                <li><Link to="/tokenEconomy">Token Economics</Link></li>
                                <li><Link to="/services">Service Marketplace</Link></li>
                                <li><Link to="/products">Product Marketplace</Link></li>
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
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            {/* <h5>Community</h5>
                            <ul>
                                <li><Link to="/community">Community</Link></li>
                            </ul> */}
                            <h5 className=''> Business videos</h5>
                            <ul>
                                <li><Link to="">service providers</Link></li>
                                <li><Link to="">product videos</Link></li>
                            </ul>
                        </div>
                        
                           
                        
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>About Us</h5>
                            <ul>
                            <li><Link to="/blockchain">Blockchain Technology & Smart contracts </Link></li>
                            <li><Link to="/portexGovernance">Portdex Governance </Link></li>
                            {/* <li><Link to="">Company</Link></li> */}
                            <li><Link to="/digital-products">Digital Product Traceability Through NFT</Link></li>
                            <li><Link to="/tax-tracking">Transaction Level Tax Tracking </Link></li>
                            <li><Link to="/connectivity">Real Time Connectivity</Link></li>
                           
                                <li><Link to="/our-team">Team</Link></li>
                                {/* <li><Link to="">Objective</Link></li>
                                <li><Link to="">Token-Foundation</Link></li>
                                <li><Link to="">Roadmap</Link></li> */}
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget m-0">
                            <h5>Contact Us</h5>
                            <a href='mailto:info@portdex.ai'>
                            <p> <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope"></i> info@portdex.ai</p>
                            </a>
                            <div className="social-icons">
                                        <a href="https://www.facebook.com/Portdex/" target="_blank"><i className="socialicons fa fa-facebook fa-lg"></i></a>
                                        <a href="https://twitter.com/portdex" target="_blank"><i className="socialicons fa fa-twitter fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/company/portdex/" target="_blank"><i className="socialicons fa fa-linkedin fa-lg"></i></a>
                                        
                                    </div>
                            
                            <div className="spacer-10"></div>
                           
                        </div>
                    </div>
                    <div className="col-md-12 text-center responsive-bottom">
                   <span className=''>
                   A Project of Portdex Limited - Registered  in England and Wales
                   </span>
                    </div>
                </div>
            </div>
            
        </footer>
);
export default footer;