import './App.css';
import NavBar from './components/NavBar'
import Products from './pages/products'
import Contact from './pages/contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Index from './pages/index'
import AboutUs from './pages/about'
import { CartContext } from './context/cartContext'
import { useState } from 'react'
import Cart from './components/Cart'

function App() {
  const [defecto, setDefecto] = useState([])
  return (
    <CartContext.Provider value={defecto}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route>
            <Cart exact path="/cart" />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
