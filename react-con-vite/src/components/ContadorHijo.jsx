import React,{memo, useMemo } from 'react'

/**
 * memo
 * se encarga de memorizar un componente
 * lo vuelve a memorizar al momento de que sus props cambian
 * evita re renderizados
 * hay que evitarlo en la medida de lo posible pues podria ser mas costosa la tarea de memorizacion que el re renderizado del componente
 * usalo cuando:
 * tenemos muchos elementos renderizados en una lista
 * llamamos datos de APIs
 * Salen alertas de rendimiento en la consola
 * un componente se vuelve muy pesado
 */


export const ContadorHijo =memo(({contador,sumar,restar}) => {
    //react memo lo que hace es memorizar el componente , pero cuando recibe propiedades que son funciones , estas funciones hay que memorizarlas con un hook llamado usecallback
    console.log("Hijo contador se renderiza")

    //esto seria un valor calculado o una computer property, entonces podriamos memorizar nuestro valor calculado 


   /*  let superNumero=0
    console.log("🚀 ~ file: ContadorHijo.jsx:21 ~ ContadorHijo ~ superNumero:", superNumero)
    
    for(let i=0;i<1000000000;i++){
        superNumero++
    }
    console.log(superNumero)
 */
//------------------------------------------------------------------------------------------------------------
    /**
     * useMemo lo que hace es memorizar el resultado de una funcion , osea un valor calculado, use memo nos dara un error si no returnamos un valor, tambien tiene un array con dependencias como sdo parametro 
     */
    
    const superNumero=useMemo(() => {
        let superNumero=0
        console.log("🚀 ~ file: ContadorHijo.jsx:21 ~ ContadorHijo ~ superNumero:", superNumero)
        
        for(let i=0;i<1000000000;i++){
            superNumero++
        }
        console.log(superNumero)
        return superNumero
    }, [])

    /**
     * USEMEMO
     * MEMORIZA UN VALOR CALCULADO, ES DECIR, EL RESULTADO DE UNA FUNCION
     * GENERA PROPIEDADES COMPUTADAS
     * USARLO EN PROCESOS PESADOS
     */


    return (
    <div className='contador_hijo'>
        <h2>Hijo del Contador</h2>
        <p> {contador} </p>
        <nav>
            <button onClick={sumar} > + </button>
            <button onClick={restar} > - </button>
        </nav>
        <p>{superNumero}</p>
    </div>
  )
}
) 
