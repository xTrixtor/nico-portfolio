import Head from "next/head";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <Head>
          <link href="./fontawesome-icons/css/all.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/styles/globals.css" type="text/css"/>
          <title>boehnerN</title>
        </Head>
      </>
    );
  }
}

export default Header;
