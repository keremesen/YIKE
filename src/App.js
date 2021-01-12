import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStlye } from "./globalStyles";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Products from "./pages/ProductList/index";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import { productData } from "./components/Products/data";
import Registry from "./pages/Registry";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
   <GlobalStlye/>
      <Navbar/>

      <Switch>
        
        <Route path="/" exact>
          <Hero />
          <Carousel />
          <Product heading="ÜRÜNLERİMİZ" data={productData} />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/registry">
          <Registry />
        </Route>

        <Route path="/cart">
          <Cart/>

        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
