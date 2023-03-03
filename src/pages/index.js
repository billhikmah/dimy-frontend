import React, { useEffect, useState } from "react";
import CreateProduct from "../component/createProduct";

function index() {
  const [row, setRow] = useState(["1"]);
  const [total, setTotal] = useState([]);
  const [grandTotal, setGrandTotal] = useState([]);

  useEffect(() => {
    updateGrandTotal();
  }, [total]);
  const deleteRow = (index, value) => {
    setRow(row.filter((_, i) => index !== i));
    const newTotal = total.filter((e) => {
      return e.value !== value;
    });
    setTotal(newTotal);
  };

  const updateValue = (changeTotal, value) => {
    const newTotal = total.filter((e) => {
      return e.value !== value;
    });
    newTotal.push({ value, total: changeTotal });
    setTotal(newTotal);
    // console.log(newTotal);
  };

  const updateGrandTotal = () => {
    let result = 0;
    for (let i = 0; i < total.length; i++) {
      result += total[i].total;
    }
    setGrandTotal(result);
  };

  return (
    <div className="main">
      <div
        className="button-new"
        onClick={() => {
          const result = Math.random().toString(36).substring(2, 7);
          setRow([...row, result]);
        }}
      >
        New
      </div>
      {row.map((e, i) => {
        let deleteStatus = false;
        if (row.length > 1) {
          deleteStatus = true;
        }
        return (
          <CreateProduct
            key={e}
            deleteRow={deleteRow}
            index={i}
            deleteStatus={deleteStatus}
            updateValue={updateValue}
            value={e}
          />
        );
      })}

      <div className="total">
        <div className="title">Grand Total</div>
        <div className="box">{grandTotal}</div>
      </div>
    </div>
  );
}

export default index;
