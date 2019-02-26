import React from "react";

export default function CartItem(props) {
  console.log(props);
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={props.item.img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="Product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {props.item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {props.item.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => props.value.value.decrement(props.item.id)}
            >
              -{" "}
            </span>
            <span className="btn btn-black mx-1">{props.item.count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => props.value.value.increment(props.item.id)}
            >
              +{" "}
            </span>
          </div>
        </div>
      </div>
      {/*Button Ends*/}
      <div
        className="col-10 mx-auto col-lg-2 my-2 my-lg-0"
        onClick={() => props.value.value.removeItem(props.item.id)}
      >
        <div className="cart-icon">
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <strong> item total : $ {props.item.total}</strong>
      </div>
    </div>
  );
}
