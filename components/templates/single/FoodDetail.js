import React from "react";
import { useRouter } from "next/router";
import db from "@/data/db.json";

function FoodDetail() {
  const router = useRouter();
  // console.log(router.query);
  const { id: foodID } = router.query;
  const food = db.foods.find((food) => food.id === Number(foodID));
  // console.log(food);
  return (
    <>
      <h3 className="fw-bold mb-4">{food?.name}</h3>
      <h5 className="mb-3">{food?.price.toLocaleString()} تومان</h5>
      <p>{food?.description}</p>
    </>
  );
}

export default FoodDetail;
