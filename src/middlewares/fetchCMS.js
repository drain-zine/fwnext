import { CMS_STATUS, ENDPOINTS } from '../constants';
import * as t from '../actions/ActionTypes';
import axios from 'axios';
import { receiveCMSEndpoints, receiveCMS, setCMSStatus, setCMSError, parseCMS } from '../actions/Actions';

const server = {
    url: 'http://localhost',
    port: 6969
}

const validateResponse = (response) => {
    return response.map((r) => {
        if(r.status !== 200){
            throw Error(`Failed to fetch CMS: ${r.statusText}`);
        }else{
            return r.data;
        }
    });
}

export const fetchCMSEndpoints = (store) => (next) => async(action)  => {
    next(action);
    if(action.type === t.FETCH_CMS_ENDPOINTS){
        try{
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_FETCH_ENDPOINTS));
            const response = await axios.get(`${server.url}:${server.port}${ENDPOINTS.CMS_LIST}`);
            store.dispatch(receiveCMSEndpoints(response.data));
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_READY_TO_FETCH));
        }catch(e){
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_ERRORED));
            store.dispatch(setCMSError(e.message));
            console.error(e);
        }
    }
};


export const fetchCMS = (store) => (next) => async(action)  => {
    next(action);
    if(action.type === t.FETCH_CMS){
        try{
            const endpoints = store.getState().cms.endpoints;
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_LOADING));
            const response = await Promise.all(endpoints.map(endpoint => axios.get(
                `${server.url}:${server.port}${endpoint}`, {
                    responseType: 'text'
                })
            ));
            const cms = validateResponse(response);    
            console.log(cms); 
            store.dispatch(receiveCMS(cms));
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_LOADED));
            store.dispatch(parseCMS());
        }catch(e){
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_ERRORED));
            store.dispatch(setCMSError(e.message));
            console.error(e);
        }
    }
};

export const fetchCMSMiddlewares = [
    fetchCMSEndpoints,
    fetchCMS
]
