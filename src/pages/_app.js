import { wrapper } from '../store/store';
import '../styles/globals.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCMSEndpoints, fetchCMS, fetchPagesForNav } from '../actions/Actions';
import { CMS_STATUS } from '../constants';
import HomeButton from '../components/HomeButton/HomeButton';
import DesktopOverlay from "../modules/DesktopOverlay/DesktopOverlay";
import dynamic from 'next/dynamic';
const WebampCS = dynamic(()=> import("../components/WebampWrapper/WebampWrapper"), { ssr: false });

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
  }, [cmsStatus]);

    // read pages + cms to format nav
    useEffect(() => {
      if(cmsStatus === CMS_STATUS.CMS_PARSED){
        dispatch(fetchPagesForNav());
      }
    }, [cmsStatus]);

    return(
        <>
          <Component router={router} {...pageProps} />
          <DesktopOverlay>
            <HomeButton />
            <WebampCS />
          </DesktopOverlay>  
        </>
  );
}

export default wrapper.withRedux(App);