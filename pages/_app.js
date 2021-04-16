import React, { Fragment, useEffect } from "react";

import "antd/dist/antd.css";
import "../styles/globals.css";
import "moment/locale/zh-tw";
import "../styles/progress.css";

import Header from "~/components/common/header";
import UnStyled from "~/components/common/unstyled";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <UnStyled />
        <Header />
          <Component {...pageProps} />
        {/* <Footer /> */}
    </>
  );
}

export default MyApp;

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
