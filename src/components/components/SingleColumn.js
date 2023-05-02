import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import { clearNfts, clearFilter , filterproductmarket } from '../../store/actions';
import { productmarket } from './constants/filters';
import NftCard from './NftCard';
import NftMusicCard from './NftMusicCard';
import { shuffleArray } from '../../store/utils';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//react functional component
const SingleColumn = ({ showLoadMore = true, shuffle = false, authorId = null }) => {

    const dispatch = useDispatch();
    const nftItems = useSelector(selectors.nftItems);
    const nfts = nftItems ? shuffle ? shuffleArray(nftItems) : nftItems : [];
    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(actions.fetchNftsBreakdown(authorId));
    }, [dispatch, authorId]);

    //will run when component unmounted
    useEffect(() => {
        return () => {
            dispatch(clearFilter());
            dispatch(clearNfts());
        }
    },[dispatch]);

    const loadMore = () => {
        dispatch(actions.fetchNftsBreakdown(authorId));
    }

    return (
        <div className='row'>
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
{/* <div className='col-lg-4 col-sm-4 col-4 cursor-pointer'>
<span className='icon-style'> <i className='fa fa-shopping-cart'></i> </span>
</div> */}
<div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
    {/* <NavLink to={`/description/${item.id}`}> */}
    <NavLink to={`/Author/${item.id}`}> 
<span className='text-blue'> Preview </span>
</NavLink>
</div>
</div>         
</div>
            </div>
            </div>
        ))}
            </div>
                   
    );
};

export default memo(SingleColumn);