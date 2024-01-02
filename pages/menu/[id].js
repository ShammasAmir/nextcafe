import Foods from "@/components/templates/single/Foods";
import React from "react";
import FoodDetail from "@/components/templates/single/FoodDetail";
import FoodSlider from "@/components/templates/single/FoodSlider";
import AddToCart from "@/components/templates/single/AddToCart";

function SinglePage() {
  return (
    <>
      <section className="single_page_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-sm-12 col-lg-6">
                  <FoodDetail />
                  <AddToCart />
                </div>
                <FoodSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <Foods />
    </>
  );
}

export default SinglePage;
