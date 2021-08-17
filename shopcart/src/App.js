
import {BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'
import './App.css';

import ViewProduct from './Components/ViewProduct';
import Cart from './Components/Cart';
import Header from './Components/header';
import { useState } from 'react';

function App() {
  //this use state is currently used to pass the items added.Work in progress
  const [myCart,setMyCart]=useState(0)
  return (
    <div className="App">
      
      <Router>
      <Header myCart={myCart}/>
        <Route>
          <Switch>
            <ViewProduct path="/" exact component={ViewProduct}  setMyCart={setMyCart}/>
            <Cart path="/cart" component={Cart} />


          </Switch>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
