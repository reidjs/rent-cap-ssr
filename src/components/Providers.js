import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import i18n from '../i18n';

const initialState = {
  zip: '',
  refund: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_ZIP':
      return Object.assign({}, state, {
        zip: action.zip
      })
    case 'CHANGE_REFUND':
      return Object.assign({}, state, {
        refund: action.refund
      })
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Provider>
  )
}

export default Providers