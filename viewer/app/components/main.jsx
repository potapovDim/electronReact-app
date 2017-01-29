'use babel'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BaseRadio} from './baseComponent/radio'
import {BaseButton} from './baseComponent/button'
import {BaseInput} from './baseComponent/input'
import {downloadFile} from '../../utils/download'

const radios = [
  {title: 'First'},
  {title: 'Second'},
  {title: 'Third'},
  {title: 'Fourth'}
]

export class Main extends Component {
  state = {
    counter: 0,
    checkedState: ''
  }
  chooseState = title => {
    this.setState({checkedState: title})
  }
  changeStateInput = event => {
    this.setState({
      text: event.target.value
    })
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
      <BaseButton  onClick= {() => {this.setState({counter: this.state.counter+ 1})}} title="Increment"/>
      <BaseButton  onClick= {
        () => {downloadFile(this.state.text.toString(), 'mytext.txt', 'text/plain', 'download')}}
        title="Create File" />
      <h1>{this.state.counter}</h1>
      First app
      <div>{radioButtons}</div>
      <BaseInput onChange ={this.changeStateInput}/>
      <a href="" id="download">Download file</a>
    </div>
  }
}
