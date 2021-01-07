import axios from 'axios';
import * as config from '../constants/config';

export default function ApiCall(method = 'GET', endpoint, data) {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: data
    }).catch( error => {
        console.log(error);
    });
}