import React, { Component } from 'react'

/**
 * 异步加载组件
 */
export const AsyncLoad = asycCom => {
  return class AsyncComponent extends Component {
    state = { AsyncCom: null}

    async componentDidMount() {
      const { default: Component } = await asycCom();

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