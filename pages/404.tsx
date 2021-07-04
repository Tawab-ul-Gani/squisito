/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Layout404 from "../src/layout/404/layout";
const Custom404 = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout404 />
    </>
  );
};

export default Custom404;
