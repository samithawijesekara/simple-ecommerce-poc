"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const BASE_API_URL = "http://localhost:8080";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await axios.get(`${BASE_API_URL}/product`);
      setProducts(products.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const fetchCartProducts = async () => {
    try {
      const cartProducts = await axios.get(`${BASE_API_URL}/product/cart`);
      setCartProducts(cartProducts.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCartProducts();
  }, []);

  const handleAddToCart = async (productId: number) => {
    try {
      const results = await axios.post(`${BASE_API_URL}/product/cart/add`, {
        id: productId,
      });
      await fetchProducts();
      await fetchCartProducts();
      return;
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <h1 className="text-4xl mt-20">Products:</h1>
      <div>
        {products.map((item: any) => (
          <>
            <li>Name: {item.name}</li>
            <li>Price: {item.price}</li>
            <button
              className="bg-blue-600 text-white"
              onClick={() => handleAddToCart(item.id)}
            >
              Add to cart
            </button>
          </>
        ))}

        <h1 className="text-4xl mt-64">Cart Items:</h1>
        {cartProducts.map((item: any) => (
          <>
            <li>Name: {item.name}</li>
            <li>Price: {item.price}</li>
          </>
        ))}
        {cartProducts.length < 0 ? "Empty cart" : null}
      </div>
    </div>
  );
}
