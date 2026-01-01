import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import ProductItems from "./components/ProductItems";
import products from "./products";
import Sidebar from "./components/Sidebar";
import Banner from './components/Banner';
import Header from './components/Header';


function App() {
  // const [count, setCount] = useState(0)

  const [search, setSearch] = useState("");
  const [selectCategory, setCategory] = useState("all");


  const filterProducts = products.filter((product) => {
    const matchCategory =
      selectCategory === "all" ||
      product.category === selectCategory;

    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });


  return (
    <>
      <Navbar setSearch={setSearch} />
      <Banner />
      <Header />


      <div className="app">
        <Sidebar setCategory={setCategory} />
        <ProductItems products={filterProducts} />
      </div>


    </>
  )
}

export default App
