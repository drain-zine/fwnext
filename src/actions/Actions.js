import * as t from "./ActionTypes";

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