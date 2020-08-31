import * as React from "react";
import {connect} from "react-redux";

import CatalogCard from "../catalog-card/catalog-card";
import {Product} from "../../mocks/products";
import {getProducts} from "../../reducer/products/selectors";

interface Props {
  products: Product[]
}

const renderCards = (products: Product[]) => {
  return (
    products.map((product, i) =>
      <CatalogCard product={product} key={product.brand + product.taste + product.weight}/>
    )
  )
};

const Catalog: React.FC<Props> = (props: Props) => {
  const {
    products
  } = props;

  return (
    <React.Fragment>
      <section className="catalog">
        {renderCards(products)}
      </section>
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  products: getProducts(state)
});

export default connect(mapStateToProps)(Catalog);