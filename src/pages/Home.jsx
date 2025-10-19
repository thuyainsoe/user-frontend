import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeatureProducts from "../components/products/FeatureProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <FeatureProducts />
    </div>
  );
};

export default Home;
