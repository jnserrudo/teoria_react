import React from 'react';

export const Message = ({mje,ok=""}) => {
  return (
    <div className={`mensaje ${ok}` }>
        <h2>{mje}</h2>

    </div>
  )
}
