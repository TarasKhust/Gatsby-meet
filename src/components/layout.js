import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Archive from './archive';
import styled from 'styled-components';

const Main = styled.main`
    margin: 0 auto;
    max-Width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    text-decoration: none;
    list-style: none;
`;

const Layout = ({ children, location }) => (
		<StaticQuery
				query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: {
    regex: "/bg/"
  }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
      }
    `}
				render={data => (
						<>
							<Header siteTitle={data.site.siteMetadata.title}/>
							{location.pathname === '/' &&
							<Img fluid={data.file.childImageSharp.fluid}/>
							}
							<Main>
								<main>{children}
									<Archive/>
								</main>
								<footer>
									© {new Date().getFullYear()}, Built with
									{` `}
									<a href="https://www.gatsbyjs.org">Gatsby</a>
								</footer>
							</Main>
						</>
				)}
		/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
	location: {}
};

export default Layout;
