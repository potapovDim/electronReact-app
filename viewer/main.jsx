'use babel';
import React, {Component} from 'react';
import {BaseRadio} from './app/baseComponent/radio'
import {downloadFile} from '../utils/download'

const radios = [
  {title: 'First'},
  {title: 'Second'},
  {title: 'Third'},
  {title: 'Fourth'}
]

export default class Main extends Component {
  state = {
    counter: 0,
    checkedState: ''
  }
  chooseState = title => {
    this.setState({checkedState: title})
  }
  render() {
    const radioButtons = radios.map((rad,index) => 
    <div key={index}>
        <BaseRadio 
          onChange={this.chooseState}
          title={rad.title}
          checked={this.state.checkedState === rad.title}/>
          {rad.title}
        </div>)
    return <div>
      <button onClick= {() => {this.setState({counter: this.state.counter+ 1})}}>Increment</button>
      <button onClick= {() => {
        downloadFile(this.state.checkedState.toString(), 'mytext.txt', 'text/plain', 'download')
      }}>Create File</button>
      <h1>{this.state.counter}</h1>
      First app
      <div>{radioButtons}</div>
      <a href="" id="download">Download file</a>
    </div>;
  }
}
