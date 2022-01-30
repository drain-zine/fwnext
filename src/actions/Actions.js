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