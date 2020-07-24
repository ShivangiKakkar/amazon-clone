export const initialState = {
  basket: [],
  user: null,
};

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
          return { state }  
          break;
        default:
            return state;
    }
}

export default reducer;
