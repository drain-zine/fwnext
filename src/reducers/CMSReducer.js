import * as t from "../actions/ActionTypes";

const cms = (state = {cms: {"test":"hello"}}, action) => {
  switch(action.type){
    case t.FETCH_CMS:
      return { 
        ...state,
      };
    case t.RECEIVE_CMS:
        return {
            ...state,
            cms: action.cms
        }  
    default:
      return {...state};
    }
}

export default cms;