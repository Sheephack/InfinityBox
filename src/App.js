import 'bootstrap/scss/bootstrap.scss'
import './scss/styles.scss';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import InPromo from './components/InPromo'
import { CartProvider} from './context/cartContext'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer';
import About from './components/About'
import Footer from './components/Footer'

function App() {
  
  return (
      <CartProvider >
        
          <NavBar />
          <Switch>
            <Route exact path="/">
              <InPromo />
              <About />
            </Route>
            <Route exact path="/products">
            <InPromo />
              <About />
              <ItemListContainer />
            </Route>
            <Route path="/categories/:categoryId">
            <InPromo />
              <About />
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
            <InPromo />
              <About />
              <ItemDetailContainer />
            </Route>
            <Route exact path="/contact">
            <InPromo />
              <About />
            </Route>
            <Route exact path="/about">
            <InPromo />
              <About />
            </Route>
            <Route>
              <Cart exact path="/cart" />
            </Route>
          </Switch>
          <Footer />
        
      </CartProvider>
      
  );
}

export default App;
