import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (pageProps.title) {
      document.title = pageProps.title;
    } else {
      document.title = 'front-end-biceps';
    }
  }, [pageProps.title]);

  return <Component {...pageProps} />
}
