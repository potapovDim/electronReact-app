import React, {Component} from 'react'
import {Main} from '../components/main'
import {connect} from 'react-redux'

class MainContainer extends Component {
  render() {
    return <div >
      <Main {...this.props}/>
    </div>
  }
}

export default connect(state => state)(MainContainer)