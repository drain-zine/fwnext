import * as t from "./ActionTypes";

export const fetchCMSEndpoints = () => {
  return({
    type: t.FETCH_CMS_ENDPOINTS
  });
}

export const receiveCMSEndpoints = (endpoints) => {
  return({
    type: t.RECEIVE_CMS_ENDPOINTS,
    endpoints
  });
}

export const fetchCMS = () => {
  return({
    type: t.FETCH_CMS
  });
}

export const receiveCMS = (cms) => {
  return({
    type: t.RECEIVE_CMS,
    cms
  });
}

export const parseCMS = () => {
  return({
    type: t.PARSE_CMS,
  });
}

export const receiveParsedCMS = (parsedCMS) => {
  return ({
    type: t.RECEIVE_PARSED_CMS,
    parsedCMS
  })
}

export const setCMSStatus = (status) => {
  return({
    type: t.SET_CMS_STATUS,
    status
  });
};

export const setCMSError = (error) => {
  return({
    type: t.SET_CMS_ERROR,
    error
  });
};


// Nav
export const setHomeIsOpen = (isOpen) => ({
  type: t.SET_HOME_ISOPEN,
  isOpen
});

export const setHomeTransform = (transform) => ({
  type: t.SET_HOME_TRANSFORM,
  transform
});

export const setWebampIsOpen = (isOpen) => ({
  type: t.SET_WEBAMP_ISOPEN,
  isOpen
});

export const setWebampTransform = (transform) => ({
  type: t.SET_WEBAMP_TRANSFORM,
  transform
});

export const fetchPagesForNav = () => ({
  type: t.FETCH_PAGES_FOR_NAV
});

export const setPagesForNav = (pages) => ({
  type: t.SET_PAGES_FOR_NAV,
  pages
});