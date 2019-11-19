/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { Link } from "gatsby"
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';

import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          footer
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Layout
