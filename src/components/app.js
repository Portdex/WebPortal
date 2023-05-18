import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';

import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import ExploreOpensea from './pages/Opensea/explore';
// import Rangking from './pages/rangking';
import RankingRedux from './pages/RankingRedux';
import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
// import ItemDetail from './pages/ItemDetail';
import ItemDetailRedux from './pages/ItemDetailRedux';
import Author from './pages/Author';
import AuthorOpensea from './pages/Opensea/author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
import Price from './pages/price';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Contact from './pages/contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';

import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';

import Minter from './pages/Minter';
import auth from '../core/auth';
import Profile from './pages/Profile';
import Marketplace from './pages/marketplace';
//import CreateNft from './pages/Create/index.js';
import { createGlobalStyle } from 'styled-components';
import Product from './pages/product';
import Community from './pages/Community';
import Services from './pages/Services';
import Information from './pages/Information';
import Confirmation from './pages/Confirmation';
import Description from './pages/Description';
import Portdexvideos from './pages/Portdexvideos';
import TokenEconomy from './pages/TokenEconomy';
import UserDetails from './pages/Checkurl';
import Ourteam from './pages/Ourteam';
import Portdexdao from './pages/Portdexdao';
import Blockchain from './pages/Blockchain';
import Digitalproduct from './pages/Digitalproduct';
import Taxtracking from './pages/Taxtracking';
import Connectivity from './pages/Connectivity';
import ProductList from './pages/trial';
import ProductDescription from './pages/productsdetal';
import Servicedetail from './pages/servicedetail';


const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const isAuth = auth.getToken() !== null;

  return (
      isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />
  )
};

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      {/* <Route path="/Author">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Author />
            </ProtectedRoute>
          } 
        />
      </Route> */}
      {/* <Route path="/Profile">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Route> */}
      <Route path="/home" element={<Home />} />
     
      <Route element={<Explore/>} path="/explore" />
      <Route element={<Explore2/>} path="/explore2" />
      <Route element={<ExploreOpensea/>} path="/exploreOpensea" />
      <Route element={<RankingRedux/>} path="/rangking" />
      <Route element={<Auction/>} path="/Auction" />
      <Route element={<Helpcenter/>} path="/helpcenter" />
      <Route element={<Colection/>} path="/colection/:collectionId" />
      <Route element={<ItemDetailRedux/>} path="/ItemDetail/:nftId" />
      {/* <Route element={<Author />} path="/Author/:index" /> */}
      <Route element={<Author />} path="/Author/:username" />
      <Route element={<Servicedetail />} path="/servicedetail/:username/:serviceId" />
      <Route element={<Profile />} path="/Profile/:authorId" />
      <Route element={<AuthorOpensea />} path="/AuthorOpensea" />
      <Route element={<Wallet />} path="/wallet" />
      <Route element={<Login />} path="/login" />
      <Route element={<LoginTwo />} path="/loginTwo" />
      <Route element={<Register />} path="/register" />
      <Route element={<Price />} path="/price" />
      <Route element={<News />} path="/news" />
      <Route element={<NewsSingle />} path="/news/:postId" />
      <Route element={<Create />} path="/create" />
      <Route element={<Create2 />} path="/create2" />
      <Route element={<Create3 />} path="/create3" />
      <Route element={<Createoption />} path="/createOptions" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<ElegantIcons />} path="/elegantIcons" />
      <Route element={<EtlineIcons />} path="/etlineIcons" />
      <Route element={<FontAwesomeIcons />} path="/fontAwesomeIcons" />
      <Route element={<Alerts />} path="/alerts" />
      <Route element={<Progressbar />} path="/progressbar" />
      <Route element={<Minter />} path="/mint" />
      <Route element={<Marketplace />} path="/marketplace" />
      <Route element={<Product />} path="/products" />
      <Route element={<Community />} path="/community" />
      <Route element={<Services />} path="/services" />
      <Route element={<Information />} path="/information" />
      <Route element={<Confirmation />} path="/confirmation" />
      {/* <Route element={<Description />} path="/description" /> */}
      <Route element={<Portdexvideos />} path="/videos" />
      <Route element={<TokenEconomy />} path="/tokenEconomy" />
      <Route element={<UserDetails />} path="/check" />
      <Route element={<Ourteam />} path="/our-team" />
      <Route element={<Portdexdao />} path="/portexDAO" />
      <Route element={<Blockchain />} path="/blockchain" />
      <Route element={<Digitalproduct />} path="/digital-products" />
      <Route element={<Taxtracking />} path="/tax-tracking" />
      <Route element={<Connectivity />} path="/connectivity" />
      <Route element={<ProductList />} path="/trial" />
      <Route element={<ProductDescription />} path="/productsdetails/:username" />

      <Route element={<Description />} path="/description/:id" />
      
    </Routes>
    <ScrollToTopBtn />
  </div>
);
export default app;