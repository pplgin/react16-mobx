import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router'
import { createBrowserHistory as createHistory } from "history"
const history = createHistory()

// async load
import { AsyncLoad } from '../components/AsyncLoad'


// page config
const AsyncHome = AsyncLoad(() => import(/* webpackChunkName: "home" */'../containers/Home'))
const AsyncAbout = AsyncLoad(() => import(/* webpackChunkName: "about" */'../containers/About'))
const AsyncTst = AsyncLoad(() => import(/* webpackChunkName: "tes" */'../containers/Test'))


export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={AsyncHome}/>
      <Route path='/about' exact component={AsyncAbout}/>
      <Route path='/about/:userId/test' component={AsyncTst}/>
    </Switch>
  </Router>
)


