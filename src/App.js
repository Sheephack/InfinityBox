import './App.css';
import NavBar from './components/NavBar'
import Products from './pages/products'
import Contact from './pages/contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Index from './pages/index'
import AboutUs from './pages/about'
import { CartProvider, CartDispatchContext } from './context/cartContext'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import { getData } from './firebase'
import { collection, getDocs } from 'firebase/firestore';


function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosCollection = collection(getData(), 'productos')
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      console.log(productosList);
      setProductos(productosList);
    };
    getProductos();
  }, [])
  return (
      <CartProvider >
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
      </CartProvider>
  );
}

export default App;
