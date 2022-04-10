import { CMS_STATUS } from '../../constants';
import * as t from '../../actions/ActionTypes';
import { setCMSStatus, setCMSError, receiveParsedCMS } from '../../actions/Actions';
import parseView from './parseCMSHelpers';

export const parseCMS = (store) => (next) => (action) => {
    next(action);

    if(action.type === t.PARSE_CMS){
        try{
            const cms = store.getState().cms.cms;
            const endpoints = store.getState().cms.endpoints;
            const parser = new DOMParser();
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_PARSING));
            const parsedCMS = cms.map((post, i) => parseView(endpoints[i].split('/').pop(),
                parser.parseFromString(post, 'text/xml').getElementsByTagName('post')[0]));
            store.dispatch(receiveParsedCMS(parsedCMS));   
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_PARSED));     
        }catch(e){
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_ERRORED));
            store.dispatch(setCMSError(e.message));
            console.error(e);
        }
    }
};