import * as t from "../actions/ActionTypes";

const nav = (state = {
    homeIsOpen: false,
    webampIsOpen: true
}, action) => {
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
        case t.SET_WEBAMP_ISOPEN: 
            return {
                ...state,
                webampIsOpen: action.isOpen
            };
        case t.SET_WEBAMP_TRANSFORM: 
            return {
                ...state,
                homeTransform: action.transform
            };   
        case t.SET_PAGES_FOR_NAV: {
            return {
                ...state,
                pages: action.pages
            };
        }     
        default:
            return {...state};    
    }
};

export default nav;