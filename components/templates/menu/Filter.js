import React from "react";

function Filter() {
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        <li className="my-2 cursor-pointer filter-list-active">پیتزا</li>
        <li className="my-2 cursor-pointer">برگر</li>
        <li className="my-2 cursor-pointer">پیش غذا و سالاد</li>
        <li className="my-2 cursor-pointer">نوشیدنی</li>
      </ul>
    </div>
  );
}

export default Filter;
