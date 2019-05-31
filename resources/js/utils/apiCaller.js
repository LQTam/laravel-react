import Axios from 'axios';
import * as Config from '../constances/ConfigURL';
export default function callApi(endpoint,method = 'GET',data){
    return Axios({
        method : method,
        url : `${Config.API_URL}/${endpoint}`,
        data : data
    }).catch(err => {
        console.log(err);
    })
}