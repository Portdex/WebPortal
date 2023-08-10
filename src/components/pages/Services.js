import React , {useState ,useEffect }from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select'
import ColumnNewThreeColRedux from '../components/ColumnNewThreeColRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxFilter from '../components/CheckboxFilter';
import ColumnNewRedux from "../components/ColumnNewRedux";
import fetchServices from '../../data/fetchServices';
import ServicesBox from '../components/ServicesBox';
const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;
const options1 = [
  { value: '', label: 'What Freelance Services Are You Looking For?' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Music', label: 'Music' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Accountant', label: 'Accountant' },
  { value: 'Typist', label: 'Typist' },
  { value: 'Developer', label: 'Developer' },
  { value: 'Writer', label: 'Writer' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Doctor', label: 'Doctor' },
  { value: 'Designer', label: 'Designer' }
]

const Services = () => {
  const [modal, setModal] = useState(true);
  const [userData, setUserData] = useState([])
  const [selectedServices, setSelectedServices] = useState(null);

  const handleChange = (service) => {
    setSelectedServices(service);
    
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  useEffect(() => {
        
    fetchServices()
    .then(data => {
      data=data.data.results.users;
      setUserData(data)
     
    })
    console.log(selectedServices);
    window.scrollTo(0, 0);
  }, [selectedServices]);
  return(
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
         
        <div className="spacer-double"></div>
        <div className='px-5 pb-3'>
            <div className='row'>
            <div className='dropdownSelect two z-indez col-lg-6'><Select className='select1 m-2' defaultValue={options1[0]} options={options1} onChange={handleChange}/></div>
            <div className='dropdownSelect two z-indez col-lg-6'><input type='submit' name='search' className='m-2 hover-light bg-light border-none p-2'/></div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <h6 className='text-secondary'> Popular Categories: </h6>
              </div>
               {options1.slice(1).map((item, index) => (
    <div className='col-lg-2 col-6' key={index + 1}>
      <p className='cat-box mt-2'>{item.label}</p>
    </div>
  ))} 
   {/* <div className='col-lg-12 d-flex flex-wrap'>
            {options1.slice(1).map((item, index) => (
   <div className='cat-box mt-2'>{item.value}</div>
  ))} 
</div> */}
         

            </div>
          </div>
          
          <div className="col-md-12">
          {/* <ColumnNewThreeColRedux/> */}
          <ServicesBox/>
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