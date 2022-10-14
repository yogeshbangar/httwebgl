import Head from "next/head";
import React, { ReactNode } from "react";
import { basePath } from "../Assets";

const getFavicon = () => `${basePath}images/favicon.ico`;
const HTMLHeader = () => {
  const title = '';
  const description = '';
  const image = '';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:site_name" content={"yogesh bangar"}></meta>
      <meta name="viewport" content={`width=device-width,initial-scale=1`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:site" content={"yogesh-bangar"}></meta>
      <link rel="shortcut icon" href={getFavicon()} />
      <link rel="apple-touch-icon" href={getFavicon()} />
    </Head>
  );
};

export default HTMLHeader;
