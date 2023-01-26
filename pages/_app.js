import React from "react";

import "../styles/globals.css";
import "../styles/globals.css";

import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
