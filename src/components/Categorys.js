import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import '../app/globals.css'

async function fetchCategorys() {
  const res = await fetch("https://dummyjson.com/products/category-list");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default function Categorys() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchCategorys();
        setCategory(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    getData();
  }, []);
  console.log(category);
  return (
    <>
      {category.map((category,index) => (
         <div className="category-item" key={`category-${index}`}>
         <div className="inner-item">
           <div className="cateImge-box">
             <FontAwesomeIcon icon={faLayerGroup} width={40}/>
             {/* <Image
           src={prpps.image}
           alt={`category-${index}`}
           width={200}
           height={200}
         /> */}
           </div>
           <div className="cate-title">
             <span>{category}</span>
           </div>
         </div>
       </div>
      ))}
    </>
  );
}
