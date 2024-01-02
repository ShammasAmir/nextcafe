import React from "react";

function AddToCart() {
  return (
    <>
      <div className="mt-5 d-flex">
        <button className="btn-add">افزودن به سبد خرید</button>
        <div className="input-counter ms-4">
          <span className="plus-btn">+</span>
          <div className="input-number">1</div>
          <span className="minus-btn">-</span>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
