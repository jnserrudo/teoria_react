import React, { useState,useCallback } from 'react'
import { ContadorHijo } from './ContadorHijo'
export const Contador = () => {
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState("")
    /* const sumar=()=>setContador(contador+1)
    const restar=()=>setContador(contador-1) */
    //ahora con usecallback, ya que al pasar las funciones como propiedades, estas tienen que ser memorizadas para evitar re renderizados
    const sumar=useCallback(() => setContador(contador+1),   [contador],
    )

    const restar=useCallback(() => setContador(contador-1),[contador],
    )
    
    /**
     *  CUANDO SE TENGA UN COMPONENTE QUE SE QUIERA MEMORIZAR, USAMOS MEMO, AHORA SI ESE COMPONENTE QUE ESTAMOS POR MEMORIZAR RECIBE FUNCIONES.., ENTONCES A ESAS FUNCIONES LA TENEMOS QUE MEMORIZAR CON USECALLBACK
     * 
     * USECALLBACK
     * MEMORIZA UNA FUNCION, PARA NO VOLVERLA A DEFINIR EN CADA RENDER
     * USARLA SIEMPRE QUE SE PASE UNA FUNCION COMO PROP A UN COMPONENTE MEMORIZADO
     * USARLA SIEMPRE QUE SE PASE UNA FUNCION COMO PARAMETRO DE UN EFECTO
     */





    const handleInput=(e)=>setInput(e.target.value)

  return (
    <div className='contador'>
        <h2>Contador</h2>
        <nav>
            <button onClick={sumar} > + </button>
            <button onClick={restar} > - </button>
        </nav>
        <h3> {contador} </h3>
        <input type="text"  onChange={handleInput} value={input} ></input>
        <ContadorHijo contador={contador} sumar={sumar} restar={restar}   />

    </div>
  )
}
