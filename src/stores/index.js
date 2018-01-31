import { observable, action, useStrict } from 'mobx'
import { factory } from '../utils/common'


useStrict(true)

@factory
class CounterStore {
  @observable counter = 0

  @action
  increment() {
    this.counter ++
  }

  @action
  doubleAsync() {
    return new Promise((resolve) => {
      setTimeout(action('x', () => {
        this.counter = this.counter * 2
        resolve()
      }), 200)
    })
  }
}

export default {
  counterStore: CounterStore.factory
}