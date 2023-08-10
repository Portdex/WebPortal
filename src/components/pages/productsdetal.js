import React, { memo, useEffect , useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import fetch from "../../data/fetch";

import { useNavigate, useParams } from "react-router-dom";

const ProductDescription = () => {
    const { username } = useParams();
const [userData, setUserData]=useState([])
    useEffect(() => {
               fetch()
        .then(data => {
          data=data.data.results.users;
          const product = data.find((product) => product.username === username);
          setUserData(product)
  
        
        })
      }, []);

    return (
   
          <div style={{marginTop:'200px'}}>
      <h1>{userData.username}</h1>
     
    </div>

    );
};
export default ProductDescription;