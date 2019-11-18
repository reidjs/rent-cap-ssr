import React from 'react';
import { Link } from "gatsby"

const App = () => {
  return (
    <Link to="/flowchart">
      <PrimaryButton>{t('eligible')}</PrimaryButton>
    </Link>
  )
}

export default App