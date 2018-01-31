import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'mobx-react'

import Routes from './routers'
import stores from './stores'

const Render =  () => {
  render(
    <AppContainer>
      <Provider {...stores}>
        <Routes/>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

Render()

if (module.hot) {
  module.hot.accept('./App', Render)
}