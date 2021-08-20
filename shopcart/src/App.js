
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import ProductDetails from './Components/ProductDetails';
import ViewProduct from './Components/ViewProduct';
import Cart from './Components/Cart';
import Header from './Components/header';
import PlaceOrder from './Components/PlaceOrder';
import FilterSection from './Components/FilterSection';
import { useEffect, useState } from 'react';

function App() {
  
  //this use state is responsible for setting the cart items into the cart
  const [itemsInCart, SetItemsInCart] = useState([]);

  const addToCart = (product) => {
    SetItemsInCart([...itemsInCart, product])

  }
  const removeFromCart = (productId) => {
    let copyOfCartItems = [...itemsInCart]
    copyOfCartItems = itemsInCart.filter(newArr => newArr.id !== productId)
    SetItemsInCart(copyOfCartItems)

  }

  return (
    <div className="App">

      <Router>
        <Header cartLength={itemsInCart.length} itemsIncart={itemsInCart} />
        <Route>
          <Switch>
            <ViewProduct path="/" exact component={ViewProduct} addToCart={addToCart} />
            <ProductDetails path="/productdetails/:id" exact component={ProductDetails} addToCart={addToCart} />
            <Cart path="/cart" component={Cart} removeFromCart={removeFromCart} itemsInCart={itemsInCart}/>
            <FilterSection />
            <PlaceOrder path="/placeorder" component={PlaceOrder}/>


          </Switch>
        </Route>
      </Router>

    </div>
  );
}

export default App;
