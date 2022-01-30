import * as t from "../actions/ActionTypes";

const cms = (state = {cms: {"test":"hello"}}, action) => {
  switch(action.type){
    case t.FETCH_CMS_ENDPOINTS:
      return { 
        ...state,
      };
    case t.RECEIVE_CMS_ENDPOINTS: 
      return {
        ...state,
        endpoints: action.endpoints
      };
    case t.FETCH_CMS:
      return { 
        ...state,
      };
    case t.RECEIVE_CMS:
      return {
          ...state,
          cms: action.cms
      };
    case t.PARSE_CMS:
      return { 
        ...state,
      };
    case t.RECEIVE_PARSED_CMS:
      return {
        ...state,
        parsedCMS: action.parsedCMS
      }      
    case t.SET_CMS_STATUS:
      return { 
        ...state,
        status: action.status
      };
    case t.SET_CMS_ERROR:
      return { 
        ...state,
        error: action.error
      };  
    default:
      return {...state};
    }
}

export default cms;