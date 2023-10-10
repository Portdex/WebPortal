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
import styled,{ createGlobalStyle } from 'styled-components';
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
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ showmenu }) => (showmenu ? '0' : '-200px')};
  width: 200px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  transition: left 0.3s ease;
  z-index: 9999;
`;
const Headers = styled.header`
  background-color: white;
  color: black;
  padding: 10px;
  text-align: center;
  position: fixed;
  width:100%;
  top: 0;
`;
const SidebarOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
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
     <div className='container bg-white'>
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
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search coming soon..." type="text" />
          </div>
          
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                 <Headers className="navbarHome">
                 
                         <SidebarContainer open={showmenu}>
                        <div className=" p-4 sidebar pt-0">
                   <div className='p-2 newchat'>
                   <a href="/">
                     <img src="/img/portdex-logo_1.png" alt="" />
                     </a>
                   </div>
           
                   <div className="bottom-tabs">
                     <ul className='text-start'>
                     <a href='https://business.portdex.ai/web/user_signup'>
                       <li className='color-gold'>
                           Local Service Seller 
                           <br/>
                         Join Our Beta Community
                       </li>
                       </a>
                       <a href="/AI">
                       <li>
                        AI Layer
                      </li>
                      </a>
                       <a href="/blockchain">
                       <li>
                       Decentralised Technologies
                       </li>
                       </a>
                       <a href="/marketplace">
                       <li>
                         Freelancers Governed – Web 3.0 Marketplace
                       </li>
                       </a>
                       <a href="/our-team">
                       <li>
                         Our Team
                       </li>
                       </a>
                       <a href="/community">
                       <li>
                         Community
                       </li>
                       </a>
                     </ul>
                   </div>
                   </div>
                 </SidebarContainer>
                 <SidebarOverlay open={showmenu} onClick={() => btn_icon(!showmenu)} />
                
                      
                     
             </Headers>
                 
                  }
                </Breakpoint>

                <Breakpoint xl className="p-0">
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                {/* <div className='connect-wal'>
                  <NavLink to="/wallet">Connect Wallet</NavLink>
                </div> */}
                <div className="logout">
                  {/* <NavLink to="/wallet">Connect Wallet-coming soon</NavLink> */}
                  
                 
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