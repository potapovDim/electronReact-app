import React from 'react'

export const BaseRadio = ({onChange, title, checked, className}) => (
  <div><input
        className={className}
        type="radio" 
        checked={checked} 
        onChange={() => onChange(title)}/>
        {title}
  </div>
)
