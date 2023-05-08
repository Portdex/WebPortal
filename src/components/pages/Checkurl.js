import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetch from './fetch';
const UserDetails = () => {
    const [users, setUsers] = useState(null)

//   const fetchUserData = () => {
//     fetch("https://business.portdex.ai/portdex/2/user_details")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//         console.log(users)
//       })
//   }
useEffect(() => {
    fetch()
    .then(data => {
      data=data;
      setUsers(data)
      console.log(users)
    })
   
    
  },[])
  return (
    <div>
      {users ? (
        <div>
          <h1>{users.name}</h1>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;