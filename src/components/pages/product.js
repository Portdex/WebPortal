import React, {useState} from 'react';
import ColumnNewThreeColRedux from '../components/ColumnNewThreeColRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxFilter from '../components/CheckboxFilter';
import ColumnNewRedux from "../components/ColumnNewRedux";
import ProductBox from '../components/ProductBox';
import Select from 'react-select'
const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;
const options1 = [
  { value: '', label: 'What Digital Products Are You Looking For?' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Website', label: 'Website' },
  { value: 'Logo', label: 'Logo' },
  { value: 'Themes', label: 'Themes' },
  { value: 'Plugins', label: 'Plugins' },
  { value: 'Pdf', label: 'Pdf' },
  { value: 'Courses', label: 'Courses' },
  { value: 'Designs', label: 'Designs' },
  { value: 'Ebook', label: 'Ebook' }
]


const Product = () => {
  const [modal, setModal] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return(
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
        <div class="spacer-double"></div>
        <div className='px-5 pb-3'>
          
            <div className='row'>
            <div className='dropdownSelect two z-indez col-lg-6'><Select className='select1 m-2' defaultValue={options1[0]} options={options1} /></div>
            <div className='dropdownSelect two z-indez col-lg-6'><input type='submit' name='search' className='m-2 hover-light bg-light border-none p-2'/></div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <h6 className='text-secondary'> Popular Searches: </h6>
              </div>
              <div className='col-lg-12 d-flex flex-wrap'>
    <div className='cat-box mt-2'>Themes</div>
    <div className='cat-box mt-2'>Logos</div>
    <div className='cat-box mt-2'>Plugins</div>
    <div className='cat-box mt-2'>Designs</div>
    <div className='cat-box mt-2'>Website</div>
    <div className='cat-box mt-2'>Ebook</div>
    <div className='cat-box mt-2'>Pdf</div>
    <div className='cat-box mt-2'>Courses</div>
  </div>
         

            </div> 
          </div>
          
        <div className="spacer-half"></div>
          <div className='col-md-3'>
            <CheckboxFilter />
          </div>
          
          <div className="col-md-9">
          <div>
          {/* <ColumnNewThreeColRedux/> */}
          <ProductBox/>
          
          </div>
          </div>
        </div>
      </section>

{modal ? 
        <div className={`modal ${modal ? 'display-block' : 'display-none'}`}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1 className='text-center'>Coming Soon</h1>
            
            {/* <p class="text-center pt-5 pb-5">
              Coming Soon
            </p> */}
           
            
          </div>
        </div>
    :
    <></>  
    }
  <Footer />
</div>

);
};
export default Product;