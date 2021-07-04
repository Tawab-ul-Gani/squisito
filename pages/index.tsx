import React from "react";
import Head from "next/head";
import HomeLayout from "../src/layout/home/homelayout";

export default function Home() {
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
      <HomeLayout />
    </>
  );
}
