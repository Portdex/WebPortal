import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { 
  Link, 
  useNavigate, 
  useMatch,
  useResolvedPath
} from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import auth from '../../core/auth';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  
  
.mainside{
  .connect-wal{
    display: none;
  }
  .logout{
    display: flex;
    align-items: center;
  }
}
`;
setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      {...props}
      className={ match ? 'active' : 'non-active'}
    />
  )
};



const Header = function({ className }) {

    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const handleBtnClick = () => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = () => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = () => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = () => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = () => {
      setOpenMenu(false);
    };
    const closeMenu1 = () => {
      setOpenMenu1(false);
    };
    const closeMenu2 = () => {
      setOpenMenu2(false);
    };
    const closeMenu3 = () => {
      setOpenMenu3(false);
    };

    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });
    

    const [showmenu, btn_icon] = useState(false);
    const [showpop, btn_icon_pop] = useState(false);
    const [shownot, btn_icon_not] = useState(false);
    const closePop = () => {
      btn_icon_pop(false);
    };
    const closeNot = () => {
      btn_icon_not(false);
    };
    const refpop = useOnclickOutside(() => {
      closePop();
    });
    const refpopnot = useOnclickOutside(() => {
      closeNot();
    });

    const handleLogout = () => {
      auth.clearAppStorage();
      navigate('/login')
    }

    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
   
    <header className={`navbar white ${className}`} id="myHeader">
         <GlobalStyles/>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <img
                    src="/img/code_logo.png"
                    className="img-fluid d-block"
                    alt="#"
                  />
                  <img
                    src="/img/code_logo.png"
                    className="img-fluid d-3"
                    alt="#"
                  />
                  <img
                    src="/img/code_logo.png"
                    className="img-fluid d-4 grayscale"
                    alt="#"
                  />
                  <img
                    src="/img/code_logo.png"
                    className="img-fluid d-none grayscale"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                     <div className='navbar-item'>
                      <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                       Home
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/products" onClick={() => btn_icon(!showmenu)}>
                       Product Marketplace
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/services" onClick={() => btn_icon(!showmenu)}>
                      Service Marketplace
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/community" onClick={() => btn_icon(!showmenu)}>
                      Community
                      </NavLink>
                    </div>
                    {/* <div className='navbar-item'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick2}
                          >
                        Pages
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author/1" onClick={() => btn_icon(!showmenu)}>Author</NavLink>
                              <NavLink to="/Profile/1" onClick={() => btn_icon(!showmenu)}>Profile</NavLink> */}
                              {/* <NavLink to="/AuthorGrey/1" onClick={() => btn_icon(!showmenu)}>Author Grey</NavLink>
                              <NavLink to="/AuthorOpensea" onClick={() => btn_icon(!showmenu)}>Author OpenSea</NavLink> */}
                              {/* <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink> */}
                              {/* <NavLink to="/walletGrey" onClick={() => btn_icon(!showmenu)}>Wallet Grey</NavLink> */}
                              {/* <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>Create</NavLink> */}
                              {/* <NavLink to="/create2" onClick={() => btn_icon(!showmenu)}>Create 2</NavLink> */}
                              {/* <NavLink to="/createOptions" onClick={() => btn_icon(!showmenu)}>Create options</NavLink>
                              <NavLink to="/mint" onClick={() => btn_icon(!showmenu)}>Nft Minting</NavLink>
                              <NavLink to="/minter" onClick={() => btn_icon(!showmenu)}>Nft Minting Grey</NavLink> */}
                              {/* <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>News</NavLink> */}
                              {/* <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</NavLink>
                              <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>login</NavLink>
                              <NavLink to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</NavLink>
                              <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>Register</NavLink>
                              <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink> */}
                            {/* </div>
                          </div>
                        )}
                      </div>
                    </div> */}
                    
                    {/* <div className='navbar-item'>
                      <NavLink to="/marketplace" onClick={() => btn_icon(!showmenu)}>
                      Explore
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="#" onClick={() => btn_icon(!showmenu)}>
                      Portdex Videos
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="#" onClick={() => btn_icon(!showmenu)}>
                      Tokens Economy
                      </NavLink>
                    </div> */}
                   
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                  <div className='navbar-item'>
                      <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                       Home
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/products" onClick={() => btn_icon(!showmenu)}>
                       Product Marketplace
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/services" onClick={() => btn_icon(!showmenu)}>
                      Service Marketplace
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/community" onClick={() => btn_icon(!showmenu)}>
                      Community
                      </NavLink>
                    </div>
                    {/* <div className='navbar-item'>
                      <div ref={ref2}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                            Pages
                            <span className='lines'></span>
                            {openMenu2 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author/1" onClick={() => btn_icon(!showmenu)}>Author</NavLink>
                              <NavLink to="/Profile/1" onClick={() => btn_icon(!showmenu)}>Profile</NavLink> */}
                              {/* <NavLink to="/AuthorGrey/1" onClick={() => btn_icon(!showmenu)}>Author Grey</NavLink>
                              <NavLink to="/AuthorOpensea" onClick={() => btn_icon(!showmenu)}>Author OpenSea</NavLink> */}
                              {/* <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink> */}
                              {/* <NavLink to="/walletGrey" onClick={() => btn_icon(!showmenu)}>Wallet Grey</NavLink> */}
                              {/* <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>Create</NavLink>
                              <NavLink to="/create2" onClick={() => btn_icon(!showmenu)}>Create 2</NavLink> */}
                              {/* <NavLink to="/createOptions" onClick={() => btn_icon(!showmenu)}>Create options</NavLink>
                              <NavLink to="/mint" onClick={() => btn_icon(!showmenu)}>Nft Minting</NavLink>
                              <NavLink to="/minter" onClick={() => btn_icon(!showmenu)}>Nft Minting Grey</NavLink> */}
                              {/* <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>News</NavLink> */}
                              {/* <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</NavLink>
                              <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>login</NavLink>
                              <NavLink to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</NavLink>
                              <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>Register</NavLink>
                              <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink> */}
                              {/* </div>
                            </div>
                          )}
                          </div>
                        </div>
                    </div> */}
                   
                    {/* <div className='navbar-item'>
                      <NavLink to="/marketplace">
                      Explore
                      <span className='lines'></span>
                      </NavLink>
                     
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="#" onClick={() => btn_icon(!showmenu)}>
                      Portdex Videos
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="#" onClick={() => btn_icon(!showmenu)}>
                      Tokens Economy
                      </NavLink>
                    </div> */}
                
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                {/* <div className='connect-wal'>
                  <NavLink to="/wallet">Connect Wallet</NavLink>
                </div> */}
                <div className="logout">
                  <NavLink to="/wallet">Connect Wallet</NavLink>
                  
                  {/* <div id="de-click-menu-profile" className="de-menu-profile" onClick={() => btn_icon_pop(!showpop)} ref={refpop}>                           
                  <i className="fa fa-user user-icon-style" ></i>
                      {showpop && 
                        <div className="popshow"> */}
                          {/* <div className="d-name">
                              <h4>Monica Lucas</h4>
                              <span className="name" onClick={()=> window.open("", "_self")}>Set display name</span>
                          </div>
                          <div className="d-balance">
                              <h4>Balance</h4>
                              12.858 ETH
                          </div>
                          <div className="d-wallet">
                              <h4>My Wallet</h4>
                              <span id="wallet" className="d-wallet-address">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                              <button id="btn_copy" title="Copy Text">Copy</button>
                          </div> */}
                          {/* <div className="d-line"></div> */}
                          {/* <ul className="de-submenu-profile">
                            <li>
                              <NavLink to='/profile'>
                              <span>
                                <i className="fa fa-user"></i> My profile
                              </span>
                              </NavLink>
                            </li>
                            <li>
                            <NavLink to='/create'>
                              <span>
                                <i className="fa fa-pencil"></i> Post Your Project
                              </span>
                              </NavLink>
                            </li>
                            
                            <li>
                            <NavLink to='#'>
                              <span>
                                <i className="fa fa-pencil cursor-pointer"></i> KYC/AML
                              </span>
                              </NavLink>
                            </li>
                            <li onClick={handleLogout}>
                            <NavLink to='/login'>
                              <span>
                                <i className="fa fa-sign-out cursor-pointer"></i> Sign In
                              </span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      }
                  </div> */}
                </div>
              </div>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;