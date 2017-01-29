import React, {Component} from 'react'

import {Provider} from 'react-redux'
import {store} from '../reducers/index'

export class RootContainer extends Component {
  render() {
    return <Provider store = {store}>
      {this.props.children}
    </Provider>
  }
}