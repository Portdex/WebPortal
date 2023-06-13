import React, { memo,useState,  useEffect , useRef} from "react";

import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

const Productdetail = () => {

  const {  id } = useParams();
  console.log(id)
  const [serviceData, setServiceData]=useState([])
  const [isFixed, setIsFixed] = useState(false);
  const [isReleased, setIsReleased] = useState(false);
  const sectionRef = useRef(null);
  const packageBoxRef = useRef(null);
 

  const [product, setProduct]=useState(null)
  const userData = [
    { id: 1 , label: 'Website', img:'/img/product/website.jpg' },
    { id: 2 , label: 'Logo', img:'/img/product/logo.jpg' },
    { id: 3 , label: 'Themes', img:'/img/product/theme.jpg' },
    { id: 4 , label: 'Plugins', img:'/img/product/plugins.jpg' },
    { id: 5 , label: 'Pdf', img:'/img/product/pdf.png' },
    { id: 6 , label: 'Courses' , img:'/img/product/courses.jpg'},
    { id: 7 , label: 'Designs' , img:'/img/product/designs.png'},
    { id: 8 , label: 'Ebook', img:'/img/product/ebooks.jpg' }
  ]
   useEffect(() => {
    window.scrollTo(0, 0);
        const productData = userData.find((product) => product.id === parseInt(id)); // Convert id to integer
            setProduct(productData)
         console.log(productData)
        
         const handleScroll = () => {
          const section = document.querySelector('section');
          const packageBox = document.querySelector('.product-package-box');
    
          if (!section || !packageBox) {
            return;
          }
    
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          const packageBoxHeight = packageBox.offsetHeight;
          const windowTop = window.pageYOffset || document.documentElement.scrollTop;
          const screenWidth = window.innerWidth;
    
          const isFixed = windowTop >= sectionTop && windowTop + packageBoxHeight <= sectionBottom && screenWidth > 991;
          setIsFixed(isFixed);
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScroll);
        };
       
        }, []);
  const [loading , setLoading]= useState(false)
const [openMenu, setOpenMenu] = React.useState(true);
const [openMenu1, setOpenMenu1] = React.useState(false);
const [openMenu2, setOpenMenu2] = React.useState(false);
const [openMenu3, setOpenMenu3] = React.useState(false);
 const navigate = useNavigate();


const handleBtnClick = () => {
  setOpenMenu(!openMenu);
  setOpenMenu1(false);
  setOpenMenu2(false);
  setOpenMenu3(false);
  document.getElementById("Mainbtn").classList.add("active");
  document.getElementById("Mainbtn1").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
//   document.getElementById("Mainbtn3").classList.remove("active");
};
const handleBtnClick1 = () => {
  setOpenMenu1(!openMenu1);
  setOpenMenu2(false);
  setOpenMenu(false);
  setOpenMenu3(false);
  document.getElementById("Mainbtn1").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
//   document.getElementById("Mainbtn3").classList.remove("active");
};
const handleBtnClick2 = () => {
  setOpenMenu2(!openMenu2);
  setOpenMenu(false);
  setOpenMenu1(false);
  setOpenMenu3(false);
  document.getElementById("Mainbtn2").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn1").classList.remove("active");
//   document.getElementById("Mainbtn3").classList.remove("active");
};
// const handleBtnClick3 = () => {
//   setOpenMenu3(!openMenu3);
//   setOpenMenu(false);
//   setOpenMenu2(false);
//   setOpenMenu1(false);
//   document.getElementById("Mainbtn3").classList.add("active");
//   document.getElementById("Mainbtn").classList.remove("active");
//   document.getElementById("Mainbtn1").classList.remove("active");
//   document.getElementById("Mainbtn2").classList.remove("active");
// };

return (
 
<div>
<GlobalStyles/>


<section>
    <div className="row">
        <div className="col-lg-12">
        {product && (
           <h2 className="m-5 mb-0">
           {product.label}
       </h2>
      )}
            
        </div>
        <div className="col-lg-8">
        {product && (
            <div className="product-img-box">
          <img  className="product-img" src={product.img} alt={product.label} />
          </div>
      )}
        </div>
        <div className="col-lg-4">
        {product && (
          <div>
             <section className="no-top no-bottom"></section>
            <div className={`product-package-box d-flex row text-center  ${isFixed ? 'fixed' : ''}`}>
                <div className="col-lg-4 col-4 bg-grey">
                <ul className="de_nav">
                    <li id='Mainbtn' className="mt-2 mb-2 active "><span onClick={handleBtnClick}>Starter</span></li>
                    </ul>
                </div>
                <div className=" col-lg-4 col-4 bg-grey">
                <ul className="de_nav">
                <li id='Mainbtn1' className="mt-2 mb-2 "><span onClick={handleBtnClick1}>Standard</span></li> 
                    </ul>
                </div>
                <div className=" col-lg-4 col-4 bg-grey">
                <ul className="de_nav">
                <li id='Mainbtn2' className="mt-2 mb-2 "><span onClick={handleBtnClick2}> Premium </span></li>
                    </ul>
                </div>
               
             {openMenu && (  
        <>
        <div id='zero1' className='onStep fadeIn'> 
        <div className="row">
      
      <div className="col-lg-12 p-3">
        <div className="package-box">
          <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-6 col-6 text-center">
          <p className="m-0">
              Package
            </p>
          <h3 className="m-0">
            Starter
          </h3>
          </div>
          <div className="col-lg-6 col-6 text-center">
            <p className="m-0">
              Starts at
            </p>
            <h3 className="m-0">
              $50
            </h3>
            </div>
            </div>
            <div className="small-border"></div>
            <div className="row">
              <ul className="list-check text-start">
                <li>
                  200,000+ free Templates
                </li>
                <li>
                  100,000+ free Fonts
                </li>
                <li>
                  5GB of Cloud Storage
                </li>
                <li>
                  Ad Management
                </li>
                <li>
                 Live Chat
                </li>
                <li>
                 Forms
                </li>
                <li>
                 Pop-up Forms
                </li>
                <li>
                 SEO & Content Strategy
                </li>
              </ul>
            </div>
            <div className="row d-flex justify-content-center">
              <button className="package-button"> Chat - Order Now </button>
            </div>
        </div>
      </div>
    </div>
      
        </div>
        </>
      )}
       {openMenu1 && (  
        <>
        <div id='zero1' className='onStep fadeIn'> 
        <div className="row">
      
      <div className="col-lg-12 p-3">
        <div className="package-box">
          <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-6 col-6 text-center">
          <p className="m-0">
              Package
            </p>
          <h3 className="m-0">
            Standard
          </h3>
          </div>
          <div className="col-lg-6 col-6 text-center">
            <p className="m-0">
              Starts at
            </p>
            <h3 className="m-0">
              $100
            </h3>
            </div>
            </div>
            <div className="small-border"></div>
            <div className="row">
              <ul className="list-check text-start">
                <li>
                  200,000+ free Templates
                </li>
                <li>
                  100,000+ free Fonts
                </li>
                <li>
                  5GB of Cloud Storage
                </li>
                <li>
                  Ad Management
                </li>
                <li>
                 Live Chat
                </li>
                <li>
                 Forms
                </li>
                <li>
                 Pop-up Forms
                </li>
                <li>
                 SEO & Content Strategy
                </li>
              </ul>
            </div>
            <div className="row d-flex justify-content-center">
              <button className="package-button"> Chat - Order Now </button>
            </div>
        </div>
      </div>
    </div>
        </div>
        </>
      )}
       {openMenu2 && ( 
        <div id='zero3' className='onStep fadeIn'>
         {/* <ColumnNewRedux shuffle showLoadMore={false}/>  */}
     <div className="row">
      
      <div className="col-lg-12 p-3">
        <div className="package-box">
          <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-6 col-6 text-center">
          <p className="m-0">
              Package
            </p>
          <h3 className="m-0">
            Premium
          </h3>
          </div>
          <div className="col-lg-6 col-6 text-center">
            <p className="m-0">
              Starts at
            </p>
            <h3 className="m-0">
              $150
            </h3>
            </div>
            </div>
            <div className="small-border"></div>
            <div className="row">
              <ul className="list-check text-start">
                <li>
                  200,000+ free Templates
                </li>
                <li>
                  100,000+ free Fonts
                </li>
                <li>
                  5GB of Cloud Storage
                </li>
                <li>
                  Ad Management
                </li>
                <li>
                 Live Chat
                </li>
                <li>
                 Forms
                </li>
                <li>
                 Pop-up Forms
                </li>
                <li>
                 SEO & Content Strategy
                </li>
              </ul>
            </div>
            <div className="row d-flex justify-content-center">
              <button className="package-button"> Chat - Order Now </button>
            </div>
        </div>
      </div>
    </div>
        </div>
      )}
        
          </div>
          </div>
      )}
        </div>
        <div className="col-lg-8 p-5">
          <h3>
            Description
          </h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non neque risus. Ut tellus mauris, maximus sit amet interdum vel, tincidunt ut mi. Sed semper magna et ex placerat, sed molestie dolor porta. Duis viverra molestie urna, eget laoreet eros ullamcorper ac. Donec non nunc volutpat, facilisis elit vel, vestibulum nulla. Praesent sit amet turpis quis ipsum malesuada ultricies. Quisque eu tortor sit amet dolor pellentesque congue. Maecenas elit lectus, congue ac odio ac, interdum ultrices nulla. Aliquam erat volutpat. Nam lorem nunc, volutpat sed massa id, tincidunt placerat urna. Mauris vitae sapien vel eros efficitur pulvinar sit amet ac ligula. Sed a faucibus metus, non placerat elit. Aenean ac imperdiet purus. Ut pharetra lectus lorem, eu dapibus nulla ultrices quis. Nam vitae finibus purus. Vestibulum in turpis nec lorem elementum consequat ut vitae ante.
          <ul>
          <li>
          Nulla lobortis, lectus et malesuada molestie.
          </li>
          <li>
          ipsum quam accumsan nisl.
          </li>
          <li>
          blandit in dui sed, pretium facilisis urna.
          </li>
          <li>
          Sed mauris odio.
          </li>
         </ul>

Etiam et erat ac ligula accumsan blandit. Nam arcu ante, porta a luctus sit amet, aliquet ut ante. Quisque mattis est id bibendum facilisis. Nunc et massa bibendum, tristique justo eget, egestas erat. Proin sagittis sed ipsum ac maximus. Vestibulum facilisis mollis ultricies. Curabitur suscipit sem vitae leo tristique, sed pulvinar ipsum iaculis.

Cras laoreet interdum erat. Nulla lobortis, lectus et malesuada molestie, ipsum quam accumsan nisl, ut sollicitudin lacus justo in erat. Nunc posuere quis sapien nec ornare. Donec at nisl nisi. Vivamus porttitor eu ex eu molestie. Cras mollis, turpis eget aliquam dignissim, urna nunc dignissim enim, eget congue velit enim id nunc. Nullam enim orci, fermentum non eleifend et, porttitor in orci. Praesent tincidunt, nisl a efficitur pretium, dolor enim egestas lectus, id vestibulum tortor nibh ac nisi. Cras maximus finibus turpis, sit amet viverra nibh pellentesque eu.
<ul>
          <li>
          Nulla lobortis, lectus et malesuada molestie.
          </li>
          <li>
          ipsum quam accumsan nisl.
          </li>
          <li>
          blandit in dui sed, pretium facilisis urna.
          </li>
          <li>
          Sed mauris odio.
          </li>
         </ul>

Pellentesque scelerisque, mauris eu ultricies varius, lorem massa cursus massa, non condimentum nulla ipsum a libero. Aliquam in metus efficitur, cursus turpis eget, rutrum sapien. Nam tincidunt sem sit amet fringilla ultricies. Sed in varius est, eu laoreet dolor. Pellentesque ut laoreet mi, sed vestibulum elit. Phasellus ut ligula in lectus ultricies fermentum vitae quis eros. Curabitur laoreet turpis a diam convallis viverra a pharetra metus.

Sed venenatis justo ac mollis rutrum. Sed mauris odio, blandit in dui sed, pretium facilisis urna. Nulla vulputate mi dapibus, dignissim tortor sit amet, molestie magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Fusce scelerisque tortor at magna convallis, ut tincidunt magna mollis. Cras viverra tempus sem et ultricies. Duis id egestas mauris. Ut eget maximus risus. Aenean eget dapibus nisl, et mollis nunc. Vivamus scelerisque erat a risus porta, at aliquam felis condimentum. Curabitur non tempor sem, ut consequat arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
         <ul>
          <li>
          Nulla lobortis, lectus et malesuada molestie.
          </li>
          <li>
          ipsum quam accumsan nisl.
          </li>
          <li>
          blandit in dui sed, pretium facilisis urna.
          </li>
          <li>
          Sed mauris odio.
          </li>
         </ul>
          </p>
          
        </div>
    </div>
</section>



  <Footer />
</div>

);
}
export default Productdetail;