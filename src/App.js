import 'bootstrap/scss/bootstrap.scss'
import './scss/styles.scss';
import NavBar from './components/NavBar'
import Contact from './pages/contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import InPromo from './components/InPromo'
import AboutUs from './pages/about'
import { CartProvider} from './context/cartContext'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer';
import About from './components/About'
import Footer from './components/Footer'

function App() {
  
  return (
      <CartProvider >
        <BrowserRouter>
          <NavBar />
          <InPromo />
          <About />
          <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/products">
              <ItemListContainer />
            </Route>
            <Route path="/categories/:categoryId">
              <ItemListContainer />
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
          <Footer />
        </BrowserRouter>
      </CartProvider>
      
  );
}

export default App;
