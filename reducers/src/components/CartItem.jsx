import React from 'react'

export const CartItem = ({data,deleteFromCart}) => {
  console.log(data)
  let {id,name,precio,cantidad}=data
  return (
    <div className='box'>
        <h4> {name} </h4>
        <h5>${precio}.00 x{cantidad}={precio*cantidad}.00 </h5>
        <button onClick={()=>cantidad==1?deleteFromCart(id,true):deleteFromCart(id)} >Eliminar uno</button>
        <button onClick={()=>deleteFromCart(id,true)} >Eliminar Todos</button>
    </div>
  )
}
