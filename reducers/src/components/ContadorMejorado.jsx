import React, { useState,useReducer } from "react";
import { types } from "../actions/contadorActions";
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducer";

import "../style.css";


export const ContadorMejorado = () => {
  //const [count, setCount] = useState(0);
  //en el useReducer, el primer parametro es la funcion reductora, el segundo parametro es el estado inicial, el tercer parametro nos permite realizar una transformacion al estado inicial, pero es opcional, asi que en este caso no lo ponemos
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState,contadorInit);
  /*
  const sumar=()=>setCount(count+1)
  const restar=()=>setCount(count-1)
*/

  const sumar = () => dispatch({ type: types.incrementar });
  const restar = () => dispatch({ type:types.decrementar_5  });
  const sumar_5 = () => dispatch({ type: types.incrementar_5, payload:5 });
  const restar_5 = () => dispatch({ type: types.decrementar_5, payload:5 });
  return (
    <div className="cont">
      <h2>Contador Mejorado</h2>
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
