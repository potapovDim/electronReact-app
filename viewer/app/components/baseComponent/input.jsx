import React from 'react'

export const BaseInput = ({className, placeholder, onChange}) => (
  <div className={className} >
    <input
          type="input" 
          placeholder= {placeholder}
          onChange={onChange}/>
  </div>
)
