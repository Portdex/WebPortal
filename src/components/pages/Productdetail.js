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
    { id: 1 , label: 'Ultimate-Responsive Website', img:'/img/product/website.jpg' },
    { id: 2 , label: 'Logo-Responsive Template', img:'/img/product/logo.jpg' },
    { id: 3 , label: 'Themes-Wordpress Templates', img:'/img/product/theme.jpg' },
    { id: 4 , label: 'Wordpress Plugin Development', img:'/img/product/plugins.jpg' },
    { id: 5 , label: 'Pdf Reader', img:'/img/product/pdf.png' },
    { id: 6 , label: 'Course Builder-Online Courses' , img:'/img/product/courses.jpg'},
    { id: 7 , label: 'Web Design Agency' , img:'/img/product/designs.png'},
    { id: 8 , label: 'Responsive Ebook Landing Page ', img:'/img/product/ebooks.jpg' }
  ]
   useEffect(() => {
    window.scrollTo(0, 0);
        const productData = userData.find((product) => product.id === parseInt(id)); // Convert id to integer
            setProduct(productData)
         console.log(productData)
        
        //  const handleScroll = () => {
        //   const section = document.querySelector('section');
        //   const packageBox = document.querySelector('.product-package-box');
    
        //   if (!section || !packageBox) {
        //     return;
        //   }
    
        //   const sectionTop = section.offsetTop;
        //   const sectionHeight = section.offsetHeight;
        //   const sectionBottom = sectionTop + sectionHeight;
        //   const packageBoxHeight = packageBox.offsetHeight;
        //   const windowTop = window.pageYOffset || document.documentElement.scrollTop;
        //   const screenWidth = window.innerWidth;
    
        //   const isFixed = windowTop >= sectionTop && windowTop + packageBoxHeight <= sectionBottom && screenWidth > 991;
        //   setIsFixed(isFixed);
        // };
    
        // window.addEventListener('scroll', handleScroll);
        // window.addEventListener('resize', handleScroll);
    
        // return () => {
        //   window.removeEventListener('scroll', handleScroll);
        //   window.removeEventListener('resize', handleScroll);
        // };
       
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
  document.getElementById("Mainbtn3").classList.remove("active");
};
const handleBtnClick1 = () => {
  setOpenMenu1(!openMenu1);
  setOpenMenu2(false);
  setOpenMenu(false);
  setOpenMenu3(false);
  document.getElementById("Mainbtn1").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
  document.getElementById("Mainbtn3").classList.remove("active");
};
const handleBtnClick2 = () => {
  setOpenMenu2(!openMenu2);
  setOpenMenu(false);
  setOpenMenu1(false);
  setOpenMenu3(false);
  document.getElementById("Mainbtn2").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn1").classList.remove("active");
  document.getElementById("Mainbtn3").classList.remove("active");
};
const handleBtnClick3 = () => {
  setOpenMenu3(!openMenu3);
  setOpenMenu(false);
  setOpenMenu2(false);
  setOpenMenu1(false);
  document.getElementById("Mainbtn3").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn1").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
};

return (
 
<div>
<GlobalStyles/>


<section>
  <div className="bg-light">

  
    <div className="row grid-container  bg-light">
        <div className="col-lg-12">
        {product && (
          <div className="pt-5">
  <h2 className=" mb-0">
           {product.label}
       </h2>
       <p class="mb-0">
        By <span class="text-primary"> ABC </span>
       </p>
       <div className="product-detail-tabs">
       <div className=" bg-grey">
       <ul className="de_nav">
                    <li id='Mainbtn' className="mt-2 mb-2 active "><span onClick={handleBtnClick}>Item Details</span></li>
                    </ul>
                </div>
                <div className=" bg-grey">
                <ul className="de_nav">
                <li id='Mainbtn1' className="mt-2 mb-2 "><span onClick={handleBtnClick1}>Comments</span></li> 
                    </ul>
                </div>
                <div className=" bg-grey">
                <ul className="de_nav">
                <li id='Mainbtn2' className="mt-2 mb-2 "><span onClick={handleBtnClick2}> Support </span></li>
                    </ul>
          </div>
          <div className=" bg-grey">
                <ul className="de_nav">
                <li id='Mainbtn3' className="mt-2 mb-2 "><span onClick={handleBtnClick3}> Support </span></li>
                    </ul>
          </div>
          </div>
          </div>
         
      )}
            
        </div>
        </div>
        </div>
        {openMenu && (  
        <div className="row grid-container">
      
        
        <div className="col-lg-7 ">
          
          <div className="row ">
          <div className="label-div">
            <div className="col-lg-12 d-flex justify-content-center">

            
        {product && (
         
          <div className="product-img-box">
          <img  className="product-img" src={product.img} alt={product.label} />
          </div>
         
           
      )}
        </div>
          
       
        <div className="col-lg-12 d-flex justify-content-center">

        <div className="w-75">
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
    </div>
    </div>
    </div>
    <div className="col-lg-5 px-4">
      <div className="pricing-div w-75">
          <h3 class="border-bottom pb-3">
            Regular License <span className="shift-right">
              $17
            </span>
          </h3>
          <ul className="list-checks">
            <li>
              Quality Checked
            </li>
            <li>
              Future Updates
            </li>

          </ul>
          <button> Add to Cart </button>
          <p className=" font-size-small text-center">
          Price is in US dollars and excludes tax
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <p className="mb-0">
          Elite Author
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                  Last Updated
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                25 feb 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="fw-bold">
                <li>
                Published
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                15 march 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                High Resolution
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Yes
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Documentation
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Well documented
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Layout
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Responsive
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Tags
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                ajax contact form, business portfolio, clean, corporate website, creative portfolio, crisp, elegant, html, icons, minimal, minimalist design, modern, professional, responsive, style switcher
                </li>
              </ul>
            </div>
          </div>
         

      </div>
    </div>
    
    </div>
        )}
         {openMenu1 && (  
        <div className="row grid-container">
      
        
        <div className="col-lg-7 ">
          
          <div className="row ">
          <div className="label-div">
            <div className="col-lg-12 d-flex justify-content-center">

            
        {product && (
         
          <div className="product-img-box">
          <img  className="product-img" src={product.img} alt={product.label} />
          </div>
         
           
      )}
        </div>
          
       
        <div className="col-lg-12 d-flex justify-content-center">

        <div className="w-75">
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
    </div>
    </div>
    </div>
    <div className="col-lg-5 px-4">
      <div className="pricing-div w-75">
          <h3 class="border-bottom pb-3">
            Regular License <span className="shift-right">
              $17
            </span>
          </h3>
          <ul className="list-checks">
            <li>
              Quality Checked
            </li>
            <li>
              Future Updates
            </li>

          </ul>
          <button> Add to Cart </button>
          <p className=" font-size-small text-center">
          Price is in US dollars and excludes tax
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <p className="mb-0">
          Elite Author
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                  Last Updated
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                25 feb 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="fw-bold">
                <li>
                Published
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                15 march 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                High Resolution
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Yes
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Documentation
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Well documented
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Layout
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Responsive
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Tags
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                ajax contact form, business portfolio, clean, corporate website, creative portfolio, crisp, elegant, html, icons, minimal, minimalist design, modern, professional, responsive, style switcher
                </li>
              </ul>
            </div>
          </div>
         

      </div>
    </div>
    
    </div>
        )}
        {openMenu3 && (  
        <div className="row grid-container">
      
        
        <div className="col-lg-7 ">
          
          <div className="row ">
          <div className="label-div">
            <div className="col-lg-12 d-flex justify-content-center">

            
        {product && (
         
          <div className="product-img-box">
          <img  className="product-img" src={product.img} alt={product.label} />
          </div>
         
           
      )}
        </div>
          
       
        <div className="col-lg-12 d-flex justify-content-center">

        <div className="w-75">
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
    </div>
    </div>
    </div>
    <div className="col-lg-5 px-4">
      <div className="pricing-div w-75">
          <h3 class="border-bottom pb-3">
            Regular License <span className="shift-right">
              $17
            </span>
          </h3>
          <ul className="list-checks">
            <li>
              Quality Checked
            </li>
            <li>
              Future Updates
            </li>

          </ul>
          <button> Add to Cart </button>
          <p className=" font-size-small text-center">
          Price is in US dollars and excludes tax
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <p className="mb-0">
          Elite Author
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                  Last Updated
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                25 feb 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="fw-bold">
                <li>
                Published
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                15 march 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                High Resolution
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Yes
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Documentation
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Well documented
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Layout
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Responsive
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Tags
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                ajax contact form, business portfolio, clean, corporate website, creative portfolio, crisp, elegant, html, icons, minimal, minimalist design, modern, professional, responsive, style switcher
                </li>
              </ul>
            </div>
          </div>
         

      </div>
    </div>
    
    </div>
        )}
         {openMenu2 && (  
        <div className="row grid-container">
      
        
        <div className="col-lg-7 ">
          
          <div className="row ">
          <div className="label-div">
            <div className="col-lg-12 d-flex justify-content-center">

            
        {product && (
         
          <div className="product-img-box">
          <img  className="product-img" src={product.img} alt={product.label} />
          </div>
         
           
      )}
        </div>
          
       
        <div className="col-lg-12 d-flex justify-content-center">

        <div className="w-75">
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
    </div>
    </div>
    </div>
    <div className="col-lg-5 px-4">
      <div className="pricing-div w-75">
          <h3 class="border-bottom pb-3">
            Regular License <span className="shift-right">
              $17
            </span>
          </h3>
          <ul className="list-checks">
            <li>
              Quality Checked
            </li>
            <li>
              Future Updates
            </li>

          </ul>
          <button> Add to Cart </button>
          <p className=" font-size-small text-center">
          Price is in US dollars and excludes tax
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <p className="mb-0">
          Elite Author
          </p>
      </div>
      <div className="pricing-div bg-light w-75">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                  Last Updated
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                25 feb 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="fw-bold">
                <li>
                Published
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                15 march 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                High Resolution
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Yes
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Documentation
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Well documented
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Layout
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                 Responsive
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li className="fw-bold">
                Tags
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
                <li>
                ajax contact form, business portfolio, clean, corporate website, creative portfolio, crisp, elegant, html, icons, minimal, minimalist design, modern, professional, responsive, style switcher
                </li>
              </ul>
            </div>
          </div>
         

      </div>
    </div>
    
    </div>
        )}
</section>



  <Footer />
</div>

);
}
export default Productdetail;