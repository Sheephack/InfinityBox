import 'bootstrap/scss/bootstrap.scss'
import './scss/styles.scss';
import NavBar from './components/NavBar'
import Products from './pages/products'
import Contact from './pages/contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Index from './pages/index'
import AboutUs from './pages/about'
import { CartProvider} from './context/cartContext'
import Cart from './components/Cart'



function App() {
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
