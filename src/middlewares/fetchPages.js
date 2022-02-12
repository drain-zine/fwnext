import { setPagesForNav } from '../actions/Actions';
import * as t from '../actions/ActionTypes';

const dirname = '../pages/';

const fetchPages = async() => {
    // Read pages from pages
    //const pages = await glob('pages/**/*.js', { cwd: dirname })
    return pages;
};

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
    cms = [
        "/cms/digital-active-conciousness/test",
        "/cms/digital-active-conciousness/test2",
        "/cms/digital-active-conciousness/test3",
        "/cms/wagwan/test1",
        "/cms/wagwan/test2"
    ];

    
    console.log(process.env.menu);
    const mainPages = process.env.menu.map(page => {
        return({
            [toTitleCase(page.name)]: {
                link: page.link
            }
        });
    });

    console.log(mainPages);

    const cmsArticles = cms.map(c => {
        const route = c.split('/cms/')[1];
        const page = toTitleCase(route.split('/')[0]);
        const articleName = route.split('/')[1];
        return({
            [page]: [
                {
                name: toTitleCase(articleName),
                link: route.replace('/', '#')
            }]   
        });
    });

    console.log(cmsArticles);

    const formatCMS = [...cmsArticles, ...mainPages].reduce((acc, curr) => {        
        const key = Object.keys(curr)[0]
        const found = acc.find(i => i[key])
        if (!found) {
            acc.push(curr)
        } else {
            found[key] = [ ...found[key], ...curr[key] ]
        }
        return acc;
    }, []);

    console.log(formatCMS);
    return formatCMS;
}

const testData = {
    'Digital Active Concioussness': [{
        name: 'mushroom',
        link: 'hello'
    }, {
        name: 'bonito',
        link: 'test'
    }],
    'Dreamspace': [{
        name: 'Convex Reality',
        link: 'hello'
    }, {
        name: 'Trucking',
        link: 'test'
    }],
    'drain-00': '/drain-00'
}

export const fetchPagesForNav = (store) => (next) => (action)  => {
    next(action);
    if(action.type === t.FETCH_PAGES_FOR_NAV){
        //const pages = fetchPages();
        const cms = store.getState().cms.endpoints;
        const formattedPages = formatPagesObj({
            cms
        });
        store.dispatch(setPagesForNav(formattedPages));
    }
};
