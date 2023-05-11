import React from "react";
import NextHead from "next/head";

const CustomHead = ({ title }: any) => (
  <NextHead>
    <title>{title} | El’Terreno Projects Limited </title>
    <meta charSet="UTF-8" />
    <meta name="description" content={`${title} page for the Dalmoore`} />
    <link rel="icon" href="/favicon.png" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </NextHead>
);

export default CustomHead;
