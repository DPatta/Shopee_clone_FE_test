import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchProducts();
        setProduct(data.products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    getData();
  }, []);
  console.log(product);
  return (
    <>
      {product.map((product, index) => (
        <div className="product-item" key={`product-${index}-${product.sku}`}>
          <Link href={`product/${product.id}`}>
            <div className="inner-product">
              <div className="img-box">
                <Image
                  src={product.images}
                  alt={product.brand}
                  width={188}
                  height={188}
                />
              </div>
              <div className="detail">
                <h2>{product.title}</h2>
                <p>฿{product.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
