import React from "react"
import { Link } from "gatsby"
import { PrimaryButton, SecondaryButton } from '../components/Buttons'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { withTranslation } from 'react-i18next';

const IndexPage = ({ t }) => {
  return (
  <Layout>
    <SEO title="Home" />
    <Link to="/flowchart">
      <PrimaryButton>{t('eligible')}</PrimaryButton>
    </Link>
    <Link to="/calculator">
      <PrimaryButton>I'm eligible (Calculator)</PrimaryButton>
    </Link>
    <Link to="/resources">
      <PrimaryButton>Resources</PrimaryButton>
    </Link>
    <SecondaryButton onClick={() => i18n.changeLanguage('en')}>English</SecondaryButton>
    <SecondaryButton onClick={() => i18n.changeLanguage('es')}>Espanol</SecondaryButton>
  </Layout>
  )
}

export default withTranslation()(IndexPage)
