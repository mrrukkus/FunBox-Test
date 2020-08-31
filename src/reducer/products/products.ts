import products from "../../mocks/products";
import {extend} from "../../utils.js";


const initialState = {
  allProducts: products,
  chosenProducts: []
};

const ActionType = {
  CHOOSE_PRODUCT: `CHOOSE_PRODUCT`,
};

const ActionCreator = {
  chooseProduct: (product) => ({
    type: ActionType.CHOOSE_PRODUCT,
    payload: product,
  }),
};

const changeChosenProductsList = (product, productsList) => {
  const productIndex = productsList.indexOf(product);
  productIndex < 0 ?
    productsList.push(product) :
    productsList.splice(productIndex, 1);
  return productsList;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_PRODUCT:
      return extend(state, {
        chosenProducts: changeChosenProductsList(action.payload, state.chosenProducts)
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
