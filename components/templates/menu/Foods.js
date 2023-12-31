import React from "react";
import Food from "./Food";
import db from "@/data/db.json";

function Foods() {
  return (
    <div className="row gx-3">
      <>
        {db.foods.slice(0, 3).map((food) => (
          <Food key={food.id} {...food} />
        ))}
      </>
    </div>
  );
}

export default Foods;
