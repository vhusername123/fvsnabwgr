import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function BlogPostTemplate({
                                             data, // this prop will be injected by the GraphQL query below.
                                         }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    let featuredImg = getImage(data.markdownRemark.frontmatter.featuredImage)
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <div>
                <h1>{frontmatter.title}</h1>
                <GatsbyImage image={featuredImg} />
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const query = graphql`
  query PostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width:480)
          }
        }
      }
    }
  }
`