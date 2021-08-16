
import {BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'
import './App.css';

import ViewProduct from './Components/ViewProduct';
import Cart from './Components/Cart';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Route>
          <Switch>
            <ViewProduct path="/" exact component={ViewProduct} />
            <Cart path="/cart" component={Cart} />


          </Switch>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
