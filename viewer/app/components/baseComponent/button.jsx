import React from 'react'

export const BaseButton = ({onClick, onMouseDown, title, className}) => (
     <div className={className}>
        <button
          onClick={onClick && onClick}
          onMouseDown={() => onMouseDown && onMouseDown(title)}>
          {title}
        </button>
    </div>
)
