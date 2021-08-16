import ViewProduct from './Components/ViewProduct';
import Header from './Components/header';
import {BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Route>
          <Switch>
             <ViewProduct path="/" exact component={ViewProduct} />
            


          </Switch>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
