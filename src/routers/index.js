import React, { Component } from 'react';

const AsyncLoad = asycCom => {
  return class AsyncComponent extends Component {
    state = { AsyncCom: null}

    async componentDidMount() {
      const { default: Component } = await asycCom;

      this.setState({
        AsyncCom: Component
      })
    }

    render() {
      const { AsyncCom = null } = this.state;
      return AsyncCom ? <AsyncCom {...this.props}/> : null
    }
  }
}



const App = props => (props.children)

const routes = {
  path: '/',
  Component: App,
  getIndexRoute(location, callback) {
    callback(null, {
      getComponent(loc, callback) {
        callback(null, AsyncLoad(import(/* webpackChunkName: "home" */'../containers/Home')))
      }
    })
  },
  getChildRoutes(location, callback) {
    callback(null,[{
      path: 'about',
      component: AsyncLoad(import(/* webpackChunkName: "about" */'../containers/About'))
    }])
  }
}


export default routes



