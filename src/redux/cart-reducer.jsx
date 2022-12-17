const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";
const CHECKOUT = "CHECKOUT";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

let initialState = {
  cart: [],
  currentItem: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: [...state.currentItem, action.payload],
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.count += 1;
          }
          return item;
        }),
      };
      case DECREMENT:
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload) {
              item.count -= 1;
            }
            return item;
          }),
        };

    default:
      return state;
  }
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const deleteFromCart = (payload) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};
export const setCurrentItem = (payload) => {
  return {
    type: SET_CURRENT_ITEM,
    payload,
  };
};

export const incrementItem = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrementItem = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

export default cartReducer;
