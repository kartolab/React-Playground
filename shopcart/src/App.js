
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
import { useEffect, useState } from 'react';

function App() {
  
  //this use state is responsible for setting the cart items into the cart
  const [itemsInCart, SetItemsInCart] = useState([]);
  const [cartLength,SetCartLength]=useState(0);
 
  const addToCart = (product) => {
    //if product exist in cart increment unit +1
    //check if product exist in cart
    let checkIndx= itemsInCart.findIndex(item=>item.id===product.id)
    SetCartLength(cartLength+1)
    if(checkIndx!== -1) {
      itemsInCart[checkIndx].unit++;
    }else{
    //else add item to cart
    SetItemsInCart([...itemsInCart, product])
  }
    alert("Item added successgully !!")
  }
  const removeFromCart = (productId) => {
    let copyOfCartItems = [...itemsInCart]
    copyOfCartItems = itemsInCart.filter(newArr => newArr.id !== productId)
    SetItemsInCart(copyOfCartItems)

  }

  return (
    <div className="App">

      <Router>
        <Header cartLength={cartLength} itemsIncart={itemsInCart} />
        <Route>
          <Switch>
            <ViewProduct path="/" exact component={ViewProduct} addToCart={addToCart} />
            <ProductDetails path="/productdetails/:id" exact component={ProductDetails} addToCart={addToCart} />
            <Cart path="/cart" component={Cart} removeFromCart={removeFromCart} itemsInCart={itemsInCart}/>
           
            <PlaceOrder path="/placeorder" component={PlaceOrder}/>


          </Switch>
        </Route>
      </Router>

    </div>
  );
}

export default App;
