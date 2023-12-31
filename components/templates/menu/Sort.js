import React from "react";

function Sort() {
  return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label
          className="form-check-label cursor-pointer"
          for="flexRadioDefault1"
        >
          بیشترین قیمت
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label
          className="form-check-label cursor-pointer"
          for="flexRadioDefault2"
        >
          کمترین قیمت
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          checked
        />
        <label
          className="form-check-label cursor-pointer"
          for="flexRadioDefault3"
        >
          پرفروش ترین
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          checked
        />
        <label
          className="form-check-label cursor-pointer"
          for="flexRadioDefault4"
        >
          با تخفیف
        </label>
      </div>
    </div>
  );
}

export default Sort;
