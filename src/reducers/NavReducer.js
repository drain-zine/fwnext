import * as t from "../actions/ActionTypes";

const nav = (state = {}, action) => {
    switch(action.type){
        case t.SET_HOME_ISOPEN: 
            return {
                ...state,
                homeIsOpen: action.isOpen
            };
        default:
            return {...state};    
    }
};

export default nav;