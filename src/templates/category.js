import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'

const CategoryTemplate = ({ data, pageContext }) => (
  <Layout>
    <main>
      <Helmet title={` "${pageContext.category}" - ${config.siteTitle}`} />
      <h1>
Category:
{' '}
{pageContext.category}
</h1>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___issueNo, fields___date], order: ASC }
      filter: { frontmatter: { categories: { in: [$category] }, type: {in: ["blog", "chapter"]} } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(format: HTML, pruneLength: 170)
          timeToRead
          frontmatter {
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
