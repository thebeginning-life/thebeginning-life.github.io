import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'

const Categories = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000
                        filter: { frontmatter: { type: {in: ["chapter", "blog"]} } }) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.group.map(category => (
        <li key={category.fieldValue}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
          >
            {category.fieldValue}
            <strong> ({category.totalCount})</strong>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Categories
