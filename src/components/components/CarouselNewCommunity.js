import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";
import { carouselNew3 } from './constants';
import * as selectors from '../../store/selectors';
import { fetchNftsBreakdown } from "../../store/actions/thunks";
import api from "../../core/api";
import { productmarket } from './constants/filters';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CommunityColumn from "./CommunityColumn";

import { fetchAuthorList } from "../../store/actions/thunks";
const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const CarouselNewCommunity = ({user}) => {

    const dispatch = useDispatch();
    const authorsState = useSelector(selectors.authorsState);
    const authors = authorsState.data ? authorsState.data : [];

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [dispatch]);

    return (
        
               <div className='nft'>
          <Slider {...carouselNew3}>
         
        
        
            
            { authors && authors.map((author, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <CommunityColumn user={author} />
                </div>
            ))}
           
        
          </Slider>
        </div>
       
    );
}

export default memo(CarouselNewCommunity);
