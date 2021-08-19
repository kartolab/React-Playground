
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
import { useEffect, useState } from 'react';

function App() {
  //this use state is currently used to pass the items added.Work in progress
  // var itemsAdded='';

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


          </Switch>
        </Route>
      </Router>

    </div>
  );
}

export default App;
