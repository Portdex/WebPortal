import React, { memo, useEffect , useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CommunityColumn from "./CommunityColumn";
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";
import UserTopSeller from "./UserTopSeller";
import fetch from "../pages/fetch";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AuthorList = () => {
    const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(userData)
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const authorsState = useSelector(selectors.authorsState);
    const authors = authorsState.data ? authorsState.data : [];

    useEffect(() => {
        
        fetch()
        .then(data => {
          data=data.data.results.users;
          setUserData(data)
         
        })
      }, []);

    return (
       
        <div>
           {/* <ol className="author_list">
            { authors && authors.map((author, index) => (
                <li key={index}>
                    <UserTopSeller user={author} />
                </li>
            ))}
            </ol> */}
          

      <div class="row">
        {/* <!-- Column 1--> */}
        { userData && userData.map((author, index) => (
        <div  key={index} class="col-lg-4 p-5">
          <div className='community-column text-center'>
           <Link to={`/Author/${index}`} key={index}>
          <div class="community-card p-3">
            <div class="img-container">
              <img src="img/favicon.ico" />
            </div>
            <h3 className="community-h3 mb-2">{author.username}</h3>
            <p className="m-0 mb-2">{author.services || '-'}</p>
            <div class="community-icons">
            {author.payment_method.length > 0 ? (
author.payment_method.map((item, index) => (
  <span className="bot" key={item.name} >
    {item.name || '-'} 
    {index !== author.payment_method.length - 1 && ', '}
  </span>
))
) : (
<span className="bot"> - </span>
)}

            </div>
          </div>
          </Link>
          </div>
        </div>
        
        ))}
        {/* <!-- Column 2--> */}
      </div>
    
        </div>

    );
};
export default memo(AuthorList);