
import {BrowserRouter as Router,
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
 
 const [itemsInCart,SetItemsInCart]=useState();
  const [myCart,setMyCart]=useState(0)
  
 
 
  return (
    <div className="App">
      
      <Router>
      <Header myCart={myCart} itemsIncart= {itemsInCart}/>
        <Route>
          <Switch>
            <ViewProduct path="/" exact component={ViewProduct} addedItemToCart={SetItemsInCart} setMyCart={setMyCart}/>
            <ProductDetails path="/productdetails/:id" exact component={ProductDetails}/>
            <Cart path="/cart" component={Cart} />


          </Switch>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
