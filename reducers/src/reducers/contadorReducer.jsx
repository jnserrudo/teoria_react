import { types } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

//este funcion init se ejecuta solo cuando se monta el componente, osea solo la primera vez, para volver a ver el valor resultante de esta funcion (en este caso 100) deberia resetear la pagina 
export const contadorInit=(initialState)=>{
    //esto permite realizar operaciones o modificar el estado inicial
    return{
        contador:initialState.contador+100
    }
}


export const contadorReducer = (state, action) => {
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