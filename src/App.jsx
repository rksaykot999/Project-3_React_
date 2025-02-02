
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import './App.css';
import User from "./components/User";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])
  const handleClick = (item) => {
    console.log(item)
    const newCart = [...cart, item]
    setCart(newCart)
}

  return (
    <>
      <Header cart={cart}></Header>
      
      <User></User>
      <div className="h-screen">
      <Products handleClick={handleClick}></Products> 
      </div>
      <Footer></Footer>
    </>
  );
}

export default App