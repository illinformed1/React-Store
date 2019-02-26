import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            title,
            price,
            img,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto tex-center text-center">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                    <h2>Model : {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/*Buttons*/}
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
