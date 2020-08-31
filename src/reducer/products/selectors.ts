import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.PRODUCTS;

export const getProducts = (state: {}) => {
  return state[NAME_SPACE].allProducts;
};

