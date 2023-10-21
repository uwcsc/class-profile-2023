import Head from "next/head";
import React from "react";

interface Props {
  children: string | string[];
}

export function Title(props: Props) {
  const children = typeof props.children === "string" ? [props.children] : props.children;

  children.push("2022 CS Class Profile");

  return (
    <Head>
      <title>{children.join(" - ")}</title>
    </Head>
  );
}
