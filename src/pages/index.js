import Landing from '../modules/Landing/Landing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCMS } from '../actions/Actions';

export default function Home() {
  const dispatch = useDispatch();

  // fetch CMS
  useEffect(() => {
      console.log("Hello world");
      dispatch(fetchCMS());
  }, []);
  
  return (
    <Landing/>
  )
}
