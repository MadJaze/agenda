import React from 'react'
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Profile from './components/profile'
import Home from './components/home';
import Criar from './components/criar';

import Modificar from './components/modificar';
import Modificar2 from './components/modificar2';
import SearchBar from './components/searchBar';
import ContactData from './db.json'
import './App.css';

function App() {
  return (
    <Router>
      <div className="supremeNavContainer">
    <div className="nav-container">
    <p className="logo">Crazy-Wave  <i class="fas fa-eye"></i></p>
    <ul className="nav-links">
    <Link to="/" > <li><i className="fas fa-home"> </i> Home</li> </Link>
      <Link to="/criar"><li>Add Contacts</li></Link> 
      <Link to="/modificar"><li>View Contacts</li></Link>
      <p><Profile /></p>
    </ul>
    </div>
    
    </div>
   
<Switch>

<Route exact path ='/'>
 <div className="criar"> <Home /> </div>
  </Route>

  <Route  path="/criar">
  <div className="criar">  <Criar /> </div>
  </Route>
 
 
  <Route path="/modificar">
<Modificar />
  </Route>
  <Route path="/modificar2/:id" component={Modificar2}>
<Modificar2 />
  </Route>


<div className="criar">  <Route path ='/test'><SearchBar /></Route> </div>
</Switch>
<Footer />
    </Router>
  );
}

export default App;
