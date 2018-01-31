import React, { Component } from 'react'
import { object } from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('counterStore')
@observer
export default class Home extends Component {
  static propTypes = {
    counterStore: object
  }

  handlerIncrement = () =>{
    this.props.counterStore.increment()
  }

  handlerDoubleAsync = () => {
    this.props.counterStore.doubleAsync()
  }

  render() {
    const { counterStore } = this.props
    return (
      <div>
         <h3>Counter: {counterStore.counter}</h3>
         <a onClick={this.handlerIncrement}>
          Increment
        </a>
        {' '}
        <a onClick={this.handlerDoubleAsync}>
          Double (Async)
        </a>
      </div>
    );
  }
}



