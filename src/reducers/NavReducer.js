import * as t from "../actions/ActionTypes";

const nav = (state = {}, action) => {
    switch(action.type){
        case t.SET_HOME_ISOPEN: 
            return {
                ...state,
                homeIsOpen: action.isOpen
            };
        case t.SET_HOME_TRANSFORM: 
            return {
                ...state,
                homeTransform: action.transform
            };
        default:
            return {...state};    
    }
};

export default nav;