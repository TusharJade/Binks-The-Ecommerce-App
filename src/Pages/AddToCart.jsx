import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartSideRating from "../Components/CartSideRating";
import ProductFooterParent from "../Components/ProductFooterParent";

const AddToCart = () => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/carts");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section className="w-full flex">
      <div className="md:block hidden md:w-[35%]">
        <CartSideRating />
      </div>
      <div className="scroller-none w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] h-screen">
        <div className="px-6 py-4">
          <img
            className="cursor-pointer"
            src="assets/binksIcon.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <ProductFooterParent />
      </div>
    </section>
  );
};

export default AddToCart;