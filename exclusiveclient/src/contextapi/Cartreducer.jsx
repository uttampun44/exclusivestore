
export const Cartreducer = (state, action) => {
    switch (action.type) {

      // add to cart functionality
      case 'ADD_TO_CART':
        const newItem = { ...action.payload, quantity: 1 };
        const cartPrice =  [...state.cart, newItem];
        return {...state,
         cart: cartPrice,
         price: cartPrice.reduce((total, item) => total + item.price, 0),
         quantity: state.quantity + 1,
        }

        // remove from cart functionality
      case 'REMOVE_FROM_CART':
        const cartpriceRemove =  state.cart.filter((item) => item.id !== action.payload.id)

        return {
          ...state,
          cart: cartpriceRemove,
          price: cartpriceRemove.reduce((total, item) => total + item.price, 0)
        }

        // increment quantity
        case 'INCREMENT_QUANTITY':

        const increment = state.cart.map((item) => {

          if(item.id === action.payload.id){
            return{
              ...item,
              quantity : item.quantity + 1,
              subtotal: (state.quantity + 1) * item.price

            }
          }
          return item
        })

        return {
          ...state,
          cart: increment,
          price: increment.reduce((total, item) => total + item.price, 0),
          quantity: state.quantity + 1,
          subtotal: increment.reduce((total, item) => total + item.subtotal, 0)
        }


        case 'DECREMENT_QUANTITY':

      default:
        return state;
    }
  };
