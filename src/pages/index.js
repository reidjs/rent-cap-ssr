import React from "react"
import { Link } from "gatsby"
import { PrimaryButton, SecondaryButton } from '../components/buttons'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { withTranslation } from 'react-i18next';

const IndexPage = ({ t }) => {
  return (
  <Layout>
    <SEO title="Home" />
    <I18nextProvider i18n={i18n}>
      <Link to="/flowchart">
        <PrimaryButton>{t('eligible')}</PrimaryButton>
      </Link>
    </I18nextProvider>
  </Layout>
  )
}

export default withTranslation()(IndexPage)
