import React from 'react'

export const BaseRadio = ({onChange, title, checked, className}) => (
  <div className={className}>
    <input
        type="radio" 
        checked={checked} 
        onChange={() => onChange(title)}/>
        {title}
  </div>
)
