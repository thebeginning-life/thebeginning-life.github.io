import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

const Index = ({ data }) => (
  <Layout>
    <main>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___issueNo], order: ASC }
      filter: { frontmatter: { type: {eq: "chapter"} } }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(format: HTML, pruneLength: 150)
          timeToRead
          frontmatter {
            issueNo
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`
