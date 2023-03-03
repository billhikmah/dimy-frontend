import React, { useEffect, useState } from "react";

function createProduct(props) {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  }, [quantity, price]);
  useEffect(() => {
    props.updateValue(total, props.value);
  }, [total]);

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateQty = (e) => {
    setQuantity(e.target.value);
  };
  const updateTotal = () => {
    setTotal(price * quantity);
  };
  return (
    <div className="create row p-0 justify-content-between">
      <div className="container col-lg-2 p-0">
        <div className="title">Product Name</div>
        <input type="text" className="input" placeholder="Input product name" />
      </div>
      <div className="container col-lg-2  p-0">
        <div className="title">Product Price</div>
        <input
          type="number"
          className="input"
          placeholder="Input price"
          onChange={updatePrice}
        />
      </div>
      <div className="container col-lg-2  p-0">
        <div className="title">Quantity</div>
        <input
          type="number"
          className="input"
          placeholder="Input quantity"
          onChange={updateQty}
          defaultValue={quantity}
        />
      </div>
      <div className="container col-lg-2  p-0">
        <div className="title">Total</div>
        <div className="input">{total}</div>
      </div>
      <div className="container col-lg-2 p-0">
        <div className="title">&nbsp;</div>
        <div
          className={props.deleteStatus ? "button" : "hide"}
          onClick={() => {
            props.deleteRow(props.index, props.value, total);
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default createProduct;
