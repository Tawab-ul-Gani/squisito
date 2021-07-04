import React from "react";
import Link from "next/link";
import { Layout, Message, Home } from "./styles";

const Layout404 = () => {
  return (
    <Layout>
      <Message>
        Website is under construction. Please click the link below to navigate
        to our menu.
      </Message>
      <Home>
        <Link href="/">Home</Link>
      </Home>
    </Layout>
  );
};

export default Layout404;
