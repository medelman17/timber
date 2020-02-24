/** @jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";

export interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = props => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
