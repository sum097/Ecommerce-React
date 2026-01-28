import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Banner1 from "./components/Banner1";
import TrendingProducts from "./components/TrendingProducts";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import Banner2 from "./components/Banner2";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product",
    );
    const productsData = data.data;
    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{products}}>
      <Nav />
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
      <Banner2 />
      <NewsLetter/>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
