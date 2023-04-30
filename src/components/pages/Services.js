import React , {useState}from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select'
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
const options1 = [
  { value: '', label: 'What Services Are You Looking For?' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Music', label: 'Music' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Logo', label: 'Logo' },
  { value: 'Themes', label: 'Themes' },
  { value: 'Plugins', label: 'Plugins' },
  { value: 'Writer', label: 'Writer' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Doctor', label: 'Doctor' },
  { value: 'Designer', label: 'Designer' }
]

const Services = () => {
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
         
        <div className="spacer-double"></div>
        <div className='px-5 pb-3'>
            <h2>
              Find the Perfect Professional for You
            </h2>
            <h4 className='text-secondary'>
              Get Free quotes within minutes
            </h4>
            <div className='row'>
            <div className='dropdownSelect two z-indez col-lg-6'><Select className='select1 m-2' defaultValue={options1[0]} options={options1} /></div>
            <div className='dropdownSelect two z-indez col-lg-6'><input type='submit' name='search' className='m-2 hover-light bg-light border-none p-2'/></div>
            </div>
          </div>
          
          <div className="col-md-12">
          {/* <ColumnNewThreeColRedux/> */}
          <SingleColumn/>
          </div>
        </div>
      </section>

      {modal ? 
        <div className={`modal ${modal ? 'display-block z-index' : 'display-none'}`}>
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
export default Services;