import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
      query BlogPosrArchive {
	      allMarkdownRemark (limit: 5, sort: {
		      order: DESC,
		      fields: [frontmatter___date]
	      }) {
		    edges {
		      node {
		        frontmatter {
		          title
		          slug
		        }
		      }
		    }
		  }
		  }
		`

const Archive = () => (
		<StaticQuery
				query={POST_ARCHIVE_QUERY}
				render={({allMarkdownRemark}) => (
						<>
							<aside>
								<h3>Archive</h3>
								{allMarkdownRemark.edges.map(edge => (
										<li key={edge.node.frontmatter.slug}>
											<Link to={`/posts${edge.node.frontmatter.slug}`}>
												{edge.node.frontmatter.title}
											</Link>
										</li>
								))}
							</aside>
						</>
				)}
		/>
)

Archive.propTypes = {
	children: PropTypes.node,
}

export default Archive
