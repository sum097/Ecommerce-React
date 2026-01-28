import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import TrendingProducts from "../components/TrendingProducts";
import Banner2 from "../components/Banner2";
import Banner from "../components/Banner1";

const HomePage = () => {
  return (
    <>
      <Header />
      <Products />
      <Banner />
      <TrendingProducts />
      <Banner2 />
    </>
  );
};

export default HomePage;
