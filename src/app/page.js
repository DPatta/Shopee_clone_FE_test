"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Categorys from "../components/Categorys";
import Products from "../components/Products";
import Image from "next/image";
import Carousel from "../components/Carousel";



export default function Home({ data }) {
  
  return (
    <div className="container">
      <div className="banner-section">
        <div className="inner-section">
          <div className="section-side left">
            <Carousel/>
          </div>
          <div className="section-side right">
            <div className="img-banner">
              <Image src='https://cf.shopee.co.th/file/th-50009109-e0904257f3c42a4a59e90b2f382e6ea3_xhdpi' alt="banner-01" width={400} height={115}/>
            </div>
            <div className="img-banner">
              <Image src='https://cf.shopee.co.th/file/th-50009109-e0904257f3c42a4a59e90b2f382e6ea3_xhdpi' alt="banner-01" width={400} height={115}/>
            </div>
          </div>
        </div>
      </div>
      <div className="category-section">
        <div className="inner-category">
          <h2>Categorys</h2>
          <div className="category-block">
            <Categorys />
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="inner-product">
          <div className="product-block">
            <Products/>
          </div>
        </div>
      </div>
    </div>
  );
}
