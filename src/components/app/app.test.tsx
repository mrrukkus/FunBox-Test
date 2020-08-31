import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app";
import Products from "../../mocks/products";

const mockStore = configureStore([]);

it(`App renders correctly`, () => {
  const store = mockStore({
    "PRODUCTS": {
      allProducts: Products,
      chosenProducts: []
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
