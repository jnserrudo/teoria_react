import { types } from "../actions/shoppingAction";

export const shoppingInitialState = {
  productos: [
    { id: 1, name: "producto 1", precio: 100 },
    { id: 2, name: "producto 2", precio: 200 },
    { id: 3, name: "producto 3", precio: 300 },
    { id: 4, name: "producto 4", precio: 400 },
    { id: 5, name: "producto 5", precio: 500 },
    { id: 6, name: "producto 6", precio: 600 },
  ],
  cart: [],
};

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case types.add_to_cart:
      //con el id que recibimos del payload del dispatch, vamos a buscar entre los productos que ya existen, para obtener los demas datos
      let newItem = state.productos.find((prod) => prod.id === action.payload);

      let itemInCart = state.cart.find((it) => it.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemInCart.id
                ? {
                    ...item,
                    cantidad: item.cantidad + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...newItem,
                cantidad: 1,
              },
            ],
          };

    case types.remove_one_from_cart:
        let itemToDel=state.productos.find((prod) => prod.id === action.payload);
        return{
            ...state,
            cart:state.cart.map((item)=>item.id===itemToDel.id?{
                ...item,
                cantidad:item.cantidad-1
            }:item)
        }

    case types.remove_all_from_cart:
        let itemToDelAll=state.productos.find((prod) => prod.id === action.payload);

        return{
            ...state,
            cart:state.cart.filter((item)=>item.id!=itemToDelAll.id)
        }

    case types.clear_cart:
        return{
            ...state,
            cart:[]
        }

    default:
      return state;
  }
};
