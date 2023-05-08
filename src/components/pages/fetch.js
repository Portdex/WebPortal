import axios from 'axios'
import { Auth } from 'aws-amplify'

const fetch = async () => {

  const response = axios({
    method: 'get',
   
    url: 'https://business.portdex.ai/portdex/2/user_details',    
    crossDomain: true
  });
  
  return response
} 

export default fetch
