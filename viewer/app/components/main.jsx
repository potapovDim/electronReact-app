'use babel'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BaseRadio } from './baseComponent/radio'
import { BaseButton } from './baseComponent/button'
import { BaseInput } from './baseComponent/input'
import { TextArea } from './baseComponent/textarea'
import { downloadFile } from '../../utils/download'
import Iframe from 'react-iframe'



import { executeCustomCommand } from '../../api/shell'






const style = {
  width: '300px',
  height: '150px',
  placeholder: 'This is text area for executable command'
}

const radios = [
  { title: 'First' },
  { title: 'Second' },
  { title: 'Third' },
  { title: 'Fourth' }
]

export class Main extends Component {

  state = {
    showUrl: false,
    counter: 0,
    checkedState: ''
  }

  chooseState = title => {
    this.setState({ checkedState: title })
  }

  changeStateInput = event => {
    this.setState({
      text: event.target.value
    })
  }

  changeTextAreaState = ({ target: { value } }) => {
    this.setState({
      commandToParse: value
    })
    const [command, args] = value.split(' ')
    executeCustomCommand(command, args, (resp) => {
      this.setState({
        rest: resp
      })
      console.log(resp)
    })
  }


  setIframeIrl = ({ target: { value } }) => {
    this.setState({
      url: value
    })
  }

  showIframe = () => {
    this.setState({
      showUrl: !this.state.showUrl
    })
  }
  render() {
    const { url, showUrl } = this.state
    const radioButtons = radios.map((rad, index) =>
      <div key={index}>
        <BaseRadio
          onChange={this.chooseState}
          title={rad.title}
          checked={this.state.checkedState === rad.title} />
        {rad.title}
      </div>)
    return <div>
      <BaseButton onClick={this.showIframe} />
      <input type="text" onChange={this.setIframeIrl} placeholder='Enter url' />
      {url && showUrl && <Iframe url={url} width="450px"
        height="450px"
        id="SUPER_FRAME"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />}

      {/* <BaseButton onClick={() => { this.setState({ counter: this.state.counter + 1 }) }} title="Increment" />
<BaseButton onClick={
  () => { downloadFile(this.state.text.toString(), 'mytext.txt', 'text/plain', 'download') }}
  title="Create File" />
<h1>{this.state.counter}</h1>
First app
<div>{radioButtons}</div>
<BaseInput onChange={this.changeStateInput} />
<a id="download">Download file</a>
<TextArea style={style} onChange={this.changeTextAreaState} /> */}
    </div>
  }
}



