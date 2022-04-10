import { setPagesForNav } from '../actions/Actions';
import * as t from '../actions/ActionTypes';


const toTitleCase = (phrase) => {
    const spaced = phrase.replace(/[^0-9](?=[0-9])/g, '$& ').replace(/\-/g, ' ');
    const titleCase =  spaced
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return titleCase;  
};

const formatPagesObj = ({cms}) => {
    const mainPages = process.env.menu.map(page => {
        return({
            [toTitleCase(page.name)]: {
                link: page.link
            }
        });
    });

    const cmsArticles = cms.map(c => {
        const route = c.split('/cms/')[1];
        const page = toTitleCase(route.split('/')[0]);
        const articleName = route.split('/')[1];
        return({
            [page]: [
                {
                name: toTitleCase(articleName),
                link: `/${route.replace('/', '#')}`
            }]   
        });
    });

    const formatCMS = [...cmsArticles, ...mainPages].reduce((acc, curr) => {        
        const key = Object.keys(curr)[0]
        const found = acc.find(i => i[key])
        if (!found) {
            acc.push(curr)
        } else {
            if(!curr[key].name){
                curr[key]['name'] = 'All';
            }

            if(!Array.isArray(curr[key])){
                found[key] = [...found[key], curr[key]];
            }else{
                found[key] = [ ...found[key], ...curr[key] ]
            }
            
        }
        return acc;
    }, []);

    return Object.assign({}, ...formatCMS);
}

export const fetchPagesForNav = (store) => (next) => (action)  => {
    next(action);
    if(action.type === t.FETCH_PAGES_FOR_NAV){
        const cms = store.getState().cms.endpoints;
        const formattedPages = formatPagesObj({
            cms
        });
        store.dispatch(setPagesForNav(formattedPages));
    }
};
