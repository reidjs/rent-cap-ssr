import React from 'react'
import { Provider } from 'react-redux'
import initStore from './src/initStore'

const store = initStore()

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)