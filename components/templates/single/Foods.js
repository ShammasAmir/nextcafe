import React from "react";
import Food from "./Food";
import db from "@/data/db.json";

function Foods() {
  return (
    <section className="food_section my-5">
      <div className="container">
        <div className="row gx-3">
          <>
            {db.foods.slice(0, 4).map((food) => (
              <Food key={food.id} {...food} />
            ))}
          </>
        </div>
      </div>
    </section>
  );
}

export default Foods;
