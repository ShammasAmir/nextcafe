import Link from "next/link";
import React from "react";

function Food({id, category_id, name, image, price, description}) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="box">
        <div>
          <div className="img-box">
            <img src={image} alt="" />
          </div>
          <div className="detail-box">
            <h5>{name}</h5>
            <p>
                {description}
            </p>
            <div className="options">
              <h6>
                {price.toLocaleString()}
                <span>  تومان</span>
              </h6>
              <Link href={`/menu/${id}`}>
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
