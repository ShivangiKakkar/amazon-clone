export const initialState = {
  basket: [
    {
      id: "3254354345",
      title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128 GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image: "https://www.amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
        //Logic to add items into the basket
          return { 
              ...state,
              basket: [...state.basket, action.item]
          };
          break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing items from the basket
          let newBasket = [...state.basket];
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
          if (index >= 0) {
            //item exists in basket, remove it...
            newBasket.splice(index, 1);

          } else {
            console.warn(
              `Can't remove product (id: ${action.id}) as it's not in basket`
            );
          }

          return { 
            ...state, 
            basket: newBasket };  
          break;
        default:
            return state;
    }
}

export default reducer;
