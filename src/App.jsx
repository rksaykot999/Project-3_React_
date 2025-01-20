
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import './App.css';
import User from "./components/User";

function App() {

  return (
    <>
      <Header></Header>
      
      <User></User>
      <div className="h-screen">
      <Products></Products> 
      </div>
      <Footer></Footer>
    </>
  );
}

export default App