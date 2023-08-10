import axios from 'axios'
import { Auth } from 'aws-amplify'

const fetchServices = async () => {

  const response = axios({
    method: 'get',
    url: 'https://business.portdex.ai/portdex/2/digital_services',    
    crossDomain: true
  });
  return response
} 


export default fetchServices;