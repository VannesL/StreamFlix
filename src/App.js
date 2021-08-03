import './App.css';
import Nav from './Nav';
import Home from './Home';
import Movie from './MovieDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:id" component={Movie}/>
            {/* <Route path="/?page=:pageNum" exact component={Home}/> */}
          </Switch>
      </div>
    </Router>  
  );
}

export default App;
