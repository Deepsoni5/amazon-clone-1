export const initailState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) =>

    basket?.reduce((amount, item) => item.price + amount, 0)


//reducer data link layer ma data insert krva mate
//action e define kre add to cart k remove cart m
const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `cant remove product ${action.id} as it is not in basket`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;

