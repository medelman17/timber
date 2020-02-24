import * as React from "react";
import NextApp from "next/app";
import { AppProvider } from "../src/providers";

require("typeface-open-sans");
require("typeface-pacifico");

class App extends NextApp<{}> {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default (props: any) => {
  return (
    <AppProvider>
      <App {...props} />
    </AppProvider>
  );
};
