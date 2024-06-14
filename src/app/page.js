"use client";
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";



async function fetchData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default function Home({ data }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData();
        setProduct(data.products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    getData();
  }, []);
  console.log(product);
  ;
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      navigator: true
    };
  return (
    <div className="container">
     
      
    </div>
  );
}
