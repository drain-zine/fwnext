import { wrapper } from '../store/store';
import '../styles/globals.scss';

const App = ({Component, pageProps, router}) => {


    return(
        <Component router={router} {...pageProps} />
  );
}

export default wrapper.withRedux(App);