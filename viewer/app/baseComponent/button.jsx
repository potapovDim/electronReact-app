import React from 'react'

export const BaseButton = ({onClick, onMouseDown, title, className}) => (
      <button
        onClick={onClick}
        onMouseDown={() => onMouseDown(title)}
        className={className}>
        {title}
      </button>
)
