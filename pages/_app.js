import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const style = {
  container: 'dark:bg-nft-dark bg-white min-h-screen',
};

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className={style.container}>
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script
      src="https://kit.fontawesome.com/b23862ee07.js"
      crossorigin="anonymous"
    />
  </ThemeProvider>
);

export default MyApp;
