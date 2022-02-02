import { wrapper } from '../store/store';
import '../styles/globals.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCMSEndpoints, fetchCMS } from '../actions/Actions';
import { CMS_STATUS } from '../constants';

const App = ({Component, pageProps, router}) => {

  const dispatch = useDispatch();
  const cmsStatus =  useSelector(state => state.cms.status) || undefined;

  // fetch CMS endpoints on start
  useEffect(() => {
      dispatch(fetchCMSEndpoints());
  }, []);


  // fetch CMS on endpoints receive
  useEffect(() => {
    if(cmsStatus === CMS_STATUS.CMS_READY_TO_FETCH){
      dispatch(fetchCMS());
    }
  }, [cmsStatus])

    return(
        <Component router={router} {...pageProps} />
  );
}

export default wrapper.withRedux(App);