import { ENDPOINTS } from '../constants/endpoints';
import * as t from '../actions/ActionTypes';
import axios from 'axios';

const server = {
    url: 'http://localhost',
    port: 6969
}

export const fetchCMS = (store) => (next) => async(action)  => {
    next(action);
    if(action.type === t.FETCH_CMS){
        console.log('In fetch');
        try{
            const response = await axios.get(`${server.url}:${server.port}${ENDPOINTS.FETCH_CMS}`);
            console.log(response);
        }catch(e){
            console.error(e);
        }
    }
};