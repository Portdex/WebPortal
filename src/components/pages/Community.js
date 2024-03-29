import React, {useState , useEffect} from 'react';
import Select from 'react-select'
import Footer from '../components/footer';
import AuthorListRedux from '../components/AuthorListRedux';
import { createGlobalStyle } from 'styled-components';
import fetch from '../../data/fetch';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;


const customStyles = {
  option: (base, state) => ({
    ...base,
    background: "#fff",
    color: "#727272",
    borderRadius: state.isFocused ? "0" : 0,
    "&:hover": {
      background: "#ddd",
    }
  }),
  menu: base => ({
    ...base,
    background: "#fff !important",
    borderRadius: 0,
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  control: (base, state) => ({
    ...base,
    padding: 2
  })
};


// const options = [
//   { value: 'Last 7 days', label: 'Last 7 days' },
//   { value: 'Last 24 hours', label: 'Last 24 hours' },
//   { value: 'Last 30 days', label: 'Last 30 days' },
//   { value: 'All time', label: 'All time' }
// ]
const options1 = [
  { value: 'all', label: 'All categories' },
  { value: 'Software Developer', label: 'Software Developer' },
  { value: 'Music', label: 'Music' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Logo', label: 'Logo' },
  { value: 'Themes', label: 'Themes' },
  { value: 'Plugins', label: 'Plugins' },
  { value: 'Writer', label: 'Writer' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Doctor', label: 'Doctor' },
  { value: 'Accountant', label: 'Accountant' },
  { value: 'Designer', label: 'Designer' }
]


const Community= () => {
  const [userData, setUserData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false)
  // console.log(userData)
  const navigate = useNavigate();
  useEffect(() => {
    
    fetch()
    .then(data => {
      data=data.data.results.users;
      setUserData(data);
      setFilteredProducts(data); 
    })
    .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, []);
  const handleProductSelect = (option) => {
    if (option.value === 'all') {
        setFilteredProducts(userData);
    } else {
        const filtered = userData.filter((product) => product.services === option.value);
      setFilteredProducts(filtered);
    }
    setSelectedProduct(null);
  };

  const handleProductClick = (username) => {
    navigate(`/author/${username}`);
  };

  return(

<div>
<GlobalStyles/>
  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Community</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container pb-0'>
        <div className='row'>
          <div>

            <div className="items_filter centerEl">
                {/* <div className='dropdownSelect one'><Select className='select1' styles={customStyles} menuContainerStyle={{'zIndex': 999}} defaultValue={options[0]} options={options} /></div> */}
                <div className='dropdownSelect two z-index'><Select className='select1' styles={customStyles} defaultValue={options1[0]} onChange={handleProductSelect} options={options1} /></div>
            </div>
            <div class="row pt-4">
        {/* <!-- Column 1--> */}
        { filteredProducts && filteredProducts.map((author) => (
        <div  key={author.username} class="col-lg-4 col-md-6 pt-0">
          <div className='community-column text-center'>
         
          <div onClick={() => handleProductClick(author.username)} class="community-card p-3">
            <div class="img-container mx-auto">
              <img src="img/favicon.ico" />
            </div>
            <h3 className="community-h3 mb-2">{author.username}</h3>
            <p className="m-0 mb-2">{author.services || '-'}</p>
            <div class="community-icons mx-auto">
            {author.payment_method.length > 0 ? (
author.payment_method.slice(0, 4).map((item, index) => (
  <span className="bot" key={item.name} >
    {item.name || '-'} 
    {index !== author.payment_method.slice(0, 4).length - 1 && ', '}
  </span>
))
) : (
<span className="bot"> - </span>
)}
{author.payment_method.length > 4 && <span className="bot"> ...</span>}

            </div>
          </div>
         
          </div>
        </div>
        
        ))}
        {/* <!-- Column 2--> */}
      </div>

            <div className="spacer-double"></div>

            {/* <ul className="pagination justify-content-center">
                <li className="active"><span>1 - 20</span></li>
                <li><span>21 - 40</span></li>
                <li><span>41 - 60</span></li>
            </ul>  */}

          </div>
        </div>
      </section>
      <section className='container image-center p-0 pb-2' style={{backgroundImage:" url('/img/product/comingsoon.jpg')"}}>
        <div className='opacity'>
        <h2 className='text-center'>
          Categories
        </h2>
      <div className='container pt-0'>
    <div className='row'>
     <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pencil"></i>
              Writer
              
              <span className="text-grey">[&amp;#xf26e;]</span>
            </div>

            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
            <i className="fa fa-fw" aria-hidden="true" title="Copy to use camera"></i>
              Photographer
              
              <span className="text-grey">[&amp;#xf166;]</span>
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use balance-scale"></i>
              Lawyer
              
              <span className="text-grey">[&amp;#xf24e;]</span>
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use music"></i>
              Music
              
              <span className="text-grey">[&amp;#xf001;]</span>
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paint-brush"></i>
              Designer
              
              <span className="text-grey">[&amp;#xf1fc;]</span>
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mortar-board"></i>
              Teacher
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf19d;]</span>
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square-o"></i>
             Doctor
              
              <span className="text-grey">[&amp;#xf196;]</span>
            </div>
             <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mortar-board"></i>
            Software Engineer
              
              <span className="text-grey">[&amp;#xf196;]</span>
            </div>
             <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square-o"></i>
             Accountant
              
              <span className="text-grey">[&amp;#xf196;]</span>
            </div>
    </div>
    </div>
    </div>
  </section>


  <Footer />
</div>

);
};
export default Community;