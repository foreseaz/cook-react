import * as React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import store from '~/store'

import App from './App'

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = {}
const Connect = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Connect />
  </Provider>,
  document.getElementById('root')
)
