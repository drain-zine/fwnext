import { CMS_STATUS } from '../../constants';
import * as t from '../../actions/ActionTypes';
import { setCMSStatus, setCMSError } from '../../actions/Actions';

export const parseCMS = (store) => (next) => (action) => {
    next(action);

    if(action.type === t.PARSE_CMS){
        try{
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_PARSING));   
        }catch(e){
            store.dispatch(setCMSStatus(CMS_STATUS.CMS_ERRORED));
            store.dispatch(setCMSError(e.message));
            console.error(e);
        }
    }
};