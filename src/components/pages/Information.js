import React from 'react';
import ColumnNewThreeColRedux from '../components/ColumnNewThreeColRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import ServicesCheckbox from '../components/ServicesCheckbox';
import ColumnNewRedux from "../components/ColumnNewRedux";
import SingleColumn from '../components/SingleColumn';
import CheckboxProduct from '../components/CheckboxProduct';
import {
    Button,
    Card,
    Accordion
  } from 'react-bootstrap'
const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const Information = () => (
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row w-75 mx-auto mt-5'>
                <h2>Great!</h2>
                <p>
                    Just a few more Questions so we can customize your Experience.
                </p>
                <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle className='accord-head' eventKey="0">
                What Service do you want to Sell
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
           <ServicesCheckbox/>
           </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
            <Accordion.Toggle className='accord-head' eventKey="1">
                What Products do you intend to sell
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> 
              <div class="row justify-content-center check-box mx-auto w-75">
             <CheckboxProduct/>
             <CheckboxProduct/>
             <CheckboxProduct/>
             <CheckboxProduct/>
             </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
         
        </Accordion>
        <div class="row mt-3">
                                    <div class="col-lg-12">
                                        <a class="bg-primary text-center cursor-pointer text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Confirm</a>
                                    </div>
                                </div>
        </div>
        
    </section>


  <Footer />
</div>

);
export default Information;