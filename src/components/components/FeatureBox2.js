import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const featurebox2= () => (
 <div className='row'>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="feature-box min-height f-boxed style-3">
                  <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                    <i className="bg-color-2 i-boxed fa fa-clock-o"></i>
                  </Reveal>
                    <div className="text">
                      <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                        <h4 className="">P2P Marketplace-Services</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="">
                          <ul>
                            <li>
                              Blockchain based P2P marketplaces will enable users to govern the platform.
                            </li>
                            <li>
                              Eliminates third-party platforms' hefty subscription and transaction fees.
                            </li>
                          </ul>
                        </p>
                      </Reveal>
                    </div>
                    <i className="wm fa fa-clock-o"></i>
                </div>
            </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box min-height f-boxed style-3">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Decentralised Digital Product Marketplaces</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Decentralised Digital Product Marketplace. Blockchain decentralised model will eliminate centralised Marketplaces.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_cloud-upload_alt"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box min-height f-boxed style-3">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <i className=" bg-color-2 i-boxed fa fa-chain"></i>
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Interoperable infrastructure</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Interoperable Blockchain infrastructure for transaction validation, Regulated stable currency, and e-commerce transaction processing.</p>
                    </Reveal>
                  </div>
                  <i className="wm fa fa-chain"></i>
              </div>
          </div>
        </div>
);
export default featurebox2;