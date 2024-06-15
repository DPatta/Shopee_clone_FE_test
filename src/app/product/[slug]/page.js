import Image from "next/image";
import React from "react";

async function fetchProduct(slug) {
  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default async function page({ params }) {
  const product = await fetchProduct(params.slug);
  return (
    <div className="container">
      <div className="product-detail-block">
        <div className="inner-block">
        <div className="product thumnail">
          <Image src={product.images} alt={`product-thumnail-${product.id}`} width={450} height={450}/>
        </div>
        <div className="product detail">
            <h2>{product.title}</h2>
            <p> {product.description}</p>
            <p> {product.price}</p>
            <p> {product.brand}</p>
            <p> {product.category}</p>

            </div>
        </div>
        
      </div>
    </div>
  );
}
