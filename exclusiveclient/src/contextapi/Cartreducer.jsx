
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
    const removedItem = state.cart.find(item => item.productName === action.payload);
    const updatedCart = state.cart.filter(item => item.productName !== action.payload);

  return {
    ...state,
    cart: updatedCart,
    price: state.price - (removedItem.price * removedItem.quantity),
    quantity: state.quantity - removedItem.quantity,
  };

        // increment quantity
        case 'INCREMENT_QUANTITY':

        const increment = state.cart.map((item) => {

          if(item.productName === action.payload){
            return {
              ...item,
              quantity : item.quantity + 1,
              subtotal: (item.quantity + 1) * item.price

            };
          }
          return item
        })

        return {
          ...state,
          cart: increment,
          price: increment.reduce((total, item) => total + item.price * item.quantity, 0),
          quantity: increment.reduce((total, item) => total + item.quantity, 0),
          subtotal: increment.reduce((total, item) => total + item.subtotal, 0)
        }


        case 'DECREMENT_QUANTITY':

          const decrement = state.cart.map((item) => {
            if (item.productName === action.payload && item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
                subtotal: (item.quantity - 1) * item.price,
              };
            }
            return item;
          });

          return {
            ...state,
            cart: decrement,
            price: decrement.reduce((total, item) => total + item.subtotal, 0),
            quantity: state.quantity - 1,
          };

      default:
        return state;
    }
  };
