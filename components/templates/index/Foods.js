import React from "react";
import db from "@/data/db.json";
import Food from "@/components/modules/Food";

function Foods() {
  // console.log(db);
  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <ul className="filters_menu">
          <li className="active">برگر</li>
          <li>پیتزا</li>
          <li>پیش غذا و سالاد</li>
        </ul>

        <div className="filters_content">
          <div className="row grid">
            {db.foods.slice(0, 9).map((food) => (
              <Food key={food.id} {...food} />
            ))}
          </div>
        </div>
        <div className="btn-box">
          <a href="">مشاهده بیشتر</a>
        </div>
      </div>
    </section>
  );
}

export default Foods;
