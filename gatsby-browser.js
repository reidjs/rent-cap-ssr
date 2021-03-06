import React from 'react'
import { Provider } from 'react-redux'
import initStore from './src/initStore'
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';

const store = initStore()

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
     <I18nextProvider i18n={i18n}>
      {element}
    </I18nextProvider>
  </Provider>
)