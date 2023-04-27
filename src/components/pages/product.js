import React from 'react';
import ColumnNewThreeColRedux from '../components/ColumnNewThreeColRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxFilter from '../components/CheckboxFilter';
import ColumnNewRedux from "../components/ColumnNewRedux";
import SingleColumn from '../components/SingleColumn';
const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const Product = () => (
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
        <div className="spacer-double"></div>
          <div className='col-md-3'>
            <CheckboxFilter />
          </div>
          
          <div className="col-md-9">
          <div>
          {/* <ColumnNewThreeColRedux/> */}
          <SingleColumn/>
          
          </div>
          </div>
        </div>
      </section>


  <Footer />
</div>

);
export default Product;