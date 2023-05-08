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
            <ol className="author_list">
            { userData && userData.map((author, index) => (
             
                <li key={index} className='p-3 pb-0 mb-2 mx-2'>
                   <Link to={`/Author/${index}`} key={index}>
                     <div className="author_list_pp">
        <span>
            <img className="lazy" src='img/favicon.ico' alt=""/>
            <i className="fa fa-check"></i>
        </span>
      </div>                                    
      <div className="author_list_info">
          <span>{author.username}</span>
          {/* <span className="bot">{user.author_sale.category} </span> */}
       
          <p className='mb-0'>
          <span className="bot fw-bold">Category:</span> <br/>
          <span className="bot">
            {author.services || '-'}
          </span>
          </p>
          <p className='mb-0'>
            <span className="bot fw-bold">Payment Method:</span> <br/>
          {author.payment_method.length > 0 ? (
            author.payment_method.slice(0, 2).map((item, index) => (
              <span className="bot" key={item.name}>
                {item.name || '-'}
                {index !== author.payment_method.slice(0, 3).length - 1 && ', '}
              </span>
            ))
          ) : (
            <span className="bot"> - </span>
          )}
          {author.payment_method.length > 3 && <span className="bot"> ...</span>}
          </p>
      </div>  </Link>
                </li>
                
            ))}
            </ol>
        </div>

    );
};
export default memo(AuthorList);