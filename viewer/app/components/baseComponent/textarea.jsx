import React, { Component } from 'react'

export class TextArea extends React.Component {
  render() {
    const { style, onChange, placeholder } = this.props
    return (
      <textarea onChange={onChange} placeholder={placeholder} style={style} />
    )
  }
}