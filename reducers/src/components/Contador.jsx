import React, { useState,useReducer } from "react";

import "../style.css";


//este funcion init se ejecuta solo cuando se monta el componente, osea solo la primera vez, para volver a ver el valor resultante de esta funcion (en este caso 100) deberia resetear la pagina 
const init=(initialState)=>{
    //esto permite realizar operaciones o modificar el estado inicial
    return{
        contador:initialState.contador+100
    }
}

const types={
    incrementar:"incrementar",
    decrementar:"decrementar",
    incrementar_5:"incrementar_5",
    decrementar_5:"decrementar_5"
}

const reducer = (state, action) => {
  //la funcion reductora va a recibir 2 parametros,  el estado anterior y la accion a ejecutar y opcionalmente puede tener un payload, este es el valor que le estamos mandando
  //la funcion reductora siempre si o si va a devolver el estado

  //la funcion reductora tendra varias acciones

  //se acostumbra a usar la estructura switch case

  //el parametro action, que es un objeto, tiene 2 propiedades , el tipo de accion y el payload, que es como el valor que puede existir o no


    


  switch (action.type) {
    case types.incrementar:
      return { contador: state.contador + 1 };
    case types.decrementar:
      return { contador: state.contador - 1 };
    case types.incrementar_5:
      return { contador: state.contador + action.payload };
    case types.decrementar_5:
      return { contador: state.contador - action.payload };
    default:
      //si el tipo de accion que se realiza, no coincide con alguna definida, se devuelve state, que es el estado anterior
      return state;
  }
};

//se sugiere que sea un objeto

const initialState = { contador: 0 };

export const Contador = () => {
  //const [count, setCount] = useState(0);
  //en el useReducer, el primer parametro es la funcion reductora, el segundo parametro es el estado inicial, el tercer parametro nos permite realizar una transformacion al estado inicial, pero es opcional, asi que en este caso no lo ponemos
  const [state, dispatch] = useReducer(reducer, initialState,init);
  /*
  const sumar=()=>setCount(count+1)
  const restar=()=>setCount(count-1)
*/

  const sumar = () => dispatch({ type: "incrementar" });
  const restar = () => dispatch({ type: "decrementar" });
  const sumar_5 = () => dispatch({ type: "incrementar_5", payload:5 });
  const restar_5 = () => dispatch({ type: "decrementar_5", payload:5 });
  return (
    <div className="cont">
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar_5}>+5</button>

        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={restar_5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};
