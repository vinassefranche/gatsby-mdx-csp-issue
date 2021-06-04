
import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"

const QUERY = graphql`
  query Hello {
    mdx(slug: {eq: "hello"}) {
      body
    }
  }
`;

const MyPageLayout = () =>  {
  const query = useStaticQuery(QUERY);
  return <MDXRenderer>{query.mdx?.body}</MDXRenderer>
}

export default MyPageLayout;
