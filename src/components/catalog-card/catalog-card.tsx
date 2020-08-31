import * as React from "react";
import {connect} from "react-redux";

import {Product} from "../../mocks/products";
import {ActionCreator as ActionCreatorProduct} from "../../reducer/products/products";

const renderPresentText = (count: number) => {
  switch (count) {
    case (1):
      return (
        `мышь в подарок`
      )
    case (2 || 3 || 4):
      return (
        `${count} мыши в подарок`
      )
  }
  return `${count} мышей в подарок`
};

const renderNotification = (notificationTemplate: JSX.Element | string, productNotification: string) => {
  const notifications = [notificationTemplate, productNotification];
  return notifications[Math.round(Math.random())];
};

interface State {
  isSelected: boolean,
  isMouseEntered: boolean
}

interface InjectingProps {
  product: Product,
  key: string,
  setProductSelection: (product: Product) => void
}

class CatalogCard extends React.PureComponent<InjectingProps, State> {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      isMouseEntered: false
    };

    this.changeSelectionHandler = this.changeSelectionHandler.bind(this);
    this.onMouseEnteredSelectedCard = this.onMouseEnteredSelectedCard.bind(this);
  }

  changeSelectionHandler() {
    if (this.props.product.amount > 0) {
      this.setState({
        isSelected: !this.state.isSelected,
        isMouseEntered: false
      })
      this.props.setProductSelection(this.props.product);
    }
  }
  
  onMouseEnteredSelectedCard(evt) {
    if (this.state.isSelected && evt.type === `mouseenter`) {
      this.setState({
        isMouseEntered: !this.state.isMouseEntered
      })
      return null;
    }
    this.setState({
      isMouseEntered: false
    })
  }

  render() { 
    const notificationTemplate = 
      <React.Fragment>
        Чего сидишь? Порадуй котэ, <button type="button" className="catalog-card__buy" onClick={this.changeSelectionHandler}>купи.</button>
      </React.Fragment>;

    return (
      <React.Fragment>
          <article className={`catalog-card
            ${this.state.isSelected && `catalog-card--chosen`}
            ${this.props.product.amount === 0 && `catalog-card--out-of-stock`}
          `}>
            <div className="catalog-card__container" onClick={this.changeSelectionHandler} onMouseEnter={(evt) => {this.onMouseEnteredSelectedCard(evt)}} onMouseLeave={(evt) => {this.onMouseEnteredSelectedCard(evt)}}>
              {this.state.isMouseEntered ?
                <span className="catalog-card__product catalog-card__product--not-approved">Котэ не одобряет?</span> :
                <span className="catalog-card__product">Сказочное заморское яство</span>
              }
              <div className="catalog-card__product-title">
                <h2 className="catalog-card__brand">{this.props.product.brand}</h2>
                <h3 className="catalog-card__taste">{this.props.product.taste}</h3>
              </div>
              <div className="catalog-card__additional-information">
                <span className="catalog-card__capacity"><b>{this.props.product.capacity}</b> порций</span>
                {this.props.product.present > 0 && 
                  <span className="catalog-card__present">{renderPresentText(this.props.product.present)}</span>
                }
                {this.props.product.happiness && <span className="catalog-card__customer-happy">заказчик доволен</span>}
              </div>
              <div className="catalog-card__product-weight">
                <div className="catalog-card__weight">{this.props.product.weight}</div>кг
              </div>
            </div>
            <div className="catalog-card__notification">{this.props.product.amount > 0 ? renderNotification(notificationTemplate, this.props.product.notification) : `Печалька, ${this.props.product.taste} закончился.`}</div>
          </article>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setProductSelection(product) {
    dispatch(ActionCreatorProduct.chooseProduct(product))
  }
})

export default connect(null, mapDispatchToProps)(CatalogCard);