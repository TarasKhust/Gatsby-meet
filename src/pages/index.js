import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Listing from '../components/listing';

const IndexPage = () => (
  <Layout>
    <Listing/>
  </Layout>
)

export default IndexPage
