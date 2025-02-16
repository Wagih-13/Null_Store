"use client";
import { motion } from "framer-motion";
import "./style.scss";
import React, { useState } from "react";
import { useFlagsContext } from "../../context/FlagsContext";
import { IoMdClose } from "react-icons/io";

const CartList = () => {
  const { displayCart, setDisplayCart } = useFlagsContext();

  const handleOpenCart = () => {
    setDisplayCart(true);
  };
  const handleCloseCart = () => {
    setDisplayCart(false);
  };

  return (
    <>
      {displayCart && (
        <div className="cartList">
          <div className="closeIcon">
            <IoMdClose onClick={handleCloseCart} />
          </div>
          <div onClick={handleCloseCart} className="closeArea"></div>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: 300,
              opacity: 1,
              transition: { duration: 0.2, delay: 0.3 },
            }}
            className="anotherProducts"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: window.innerWidth >= 768 ? 500 : 320,
              transition: { duration: 0.3 },
            }}
            className="cartProducts"
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default CartList;
