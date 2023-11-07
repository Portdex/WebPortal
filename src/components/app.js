import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';

import ExploreOpensea from './pages/Opensea/explore';
// import Rangking from './pages/rangking';

import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
// import ItemDetail from './pages/ItemDetail';
// import ItemDetailRedux from './pages/ItemDetailRedux';
import Author from './pages/Author';
import AuthorOpensea from './pages/Opensea/author';
import Wallet from './pages/wallet';
import Login from './pages/login';
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

import Alerts from './pages/alerts';

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
import Portdexvideos from './pages/Portdexvideos';
import TokenEconomy from './pages/TokenEconomy';
import SendMessagePopup from './pages/SendMEssage';
import Ourteam from './pages/Ourteam';
import Portdexdao from './pages/Portdexdao';
import Blockchain from './pages/Blockchain';
import Digitalproduct from './pages/Digitalproduct';
import Taxtracking from './pages/Taxtracking';
import Connectivity from './pages/Connectivity';
import ProductDescription from './pages/productsdetal';
import Servicedetail from './pages/servicedetail';
import Productdetail from './pages/Productdetail';
import CategorySelect from './pages/CategorySelect';
import About from './pages/about';
import Author2 from './pages/Author2';
import CheckLocation from './pages/CheckLocation';
import Main from './pages/main';
import LayerAI from './pages/AI';
import Chat from './pages/Chat';



const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: auto;
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
    <Routes >
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
      <Route path="/blockchain" element={<About />} />
      <Route path="/:category" element={<CategorySelect />} /> 
      <Route path="/" element={<Main />} /> 
      <Route element={<Author2 />} path="/details/:username" />
      <Route element={<Marketplace />} path="/marketplace" />
      <Route element={<Product />} path="/products" />
      <Route element={<Community />} path="/community" />
      <Route element={<Services />} path="/services" />
      <Route element={<Information />} path="/information" />
      <Route element={<Confirmation />} path="/confirmation" />
      <Route element={<Portdexvideos />} path="/videos" />
      <Route element={<TokenEconomy />} path="/tokenEconomy" />
      <Route element={<SendMessagePopup />} path="/check" />
      <Route element={<Ourteam />} path="/our-team" />
      <Route element={<Portdexdao />} path="/portexGovernance" />
      <Route element={<Blockchain />} path="/blockchain" />
      <Route element={<Digitalproduct />} path="/digital-products" />
      <Route element={<Taxtracking />} path="/tax-tracking" />
      <Route element={<Connectivity />} path="/connectivity" />
      <Route element={<ProductDescription />} path="/productsdetails/:username" />
      <Route element={<Productdetail />} path="/productdetail/:id" />
      <Route element={<Wallet />} path="/wallet" />
      <Route element={<LayerAI />} path="/AI" />
      <Route element={<Chat />} path="/chat" />
      <Route element={<Author />} path="/Author/:username" />
      <Route element={<Servicedetail />} path="/servicedetail/:username/:serviceId" />
      {/* <Route element={<Profile />} path="/Profile/:authorId" /> */}
      <Route element={<Profile />} path="/Profile" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<CheckLocation/>} path="/checklocation" />
      <Route element={<ExploreOpensea/>} path="/exploreOpensea" />
      <Route element={<Auction/>} path="/Auction" />
      <Route element={<Helpcenter/>} path="/helpcenter" />
      <Route element={<Colection/>} path="/colection/:collectionId" />
      {/* <Route element={<ItemDetailRedux/>} path="/ItemDetail/:nftId" /> */}
      {/* <Route element={<Author />} path="/Author/:index" /> */}
      <Route element={<AuthorOpensea />} path="/AuthorOpensea" />
      <Route element={<Price />} path="/price" />
      <Route element={<News />} path="/news" />
      <Route element={<NewsSingle />} path="/news/:postId" />
      <Route element={<Create />} path="/create" />
      <Route element={<Create2 />} path="/create2" />
      <Route element={<Create3 />} path="/create3" />
      <Route element={<Createoption />} path="/createOptions" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Alerts />} path="/alerts" />
      <Route element={<Minter />} path="/mint" />
    
      
    </Routes>
    <ScrollToTopBtn />
  </div>
);
export default app;