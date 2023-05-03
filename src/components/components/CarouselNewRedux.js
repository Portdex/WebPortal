import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";
import { carouselNew } from './constants';
import * as selectors from '../../store/selectors';
import { fetchNftsBreakdown } from "../../store/actions/thunks";
import api from "../../core/api";
import { productmarket } from './constants/filters';
import { NavLink } from "react-router-dom";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const CarouselNewRedux = () => {
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
    const dispatch = useDispatch();
    const nftsState = useSelector(selectors.nftBreakdownState);
    const nfts = nftsState.data ? nftsState.data : [];

    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(fetchNftsBreakdown());
    }, [dispatch]);

    return (
        
        <div className='nft'>
          <Slider {...carouselNew}>
        { productmarket.map((item, index) => (
            <div className=' col-lg-4 col-sm-6 col-md-6 p-0'>
            <div className='single-card m-2'>
            <div className='col-lg-12'>
                <img src={item.img} className='img-fit'/>
                <h6 className='m-3'>{item.name}</h6>
                <p className='m-3'>
                Sed ut perspiciatis unde omnis iste natus error sit.
                </p>
                <div className='row text-center align-items-center icon-style-text mx-0'>
<div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
<span className='text-blue'> Chat </span>
</div>
{/* <div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
<span className='icon-style'> <i className='fa fa-shopping-cart'></i> </span>
</div> */}
<div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
    {/* <NavLink to={`/description/${item.id}`}> */}
<span className='text-blue'> Preview </span>
{/* </NavLink> */}
</div>
</div>         
</div>
            </div>
            </div>
        ))}
        
            
          </Slider>
          </div>
      
    );
}

export default memo(CarouselNewRedux);
