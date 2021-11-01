import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Listar from './components/listar';
import Criar from './components/criar';
import Deletar from './components/deletar';
import Modificar from './components/modificar';
import Modificar2 from './components/modificar2';
import './App.css';

function App() {
  return (
    <Router>
    <div className="nav-container">
    <p>Lista de contatos</p>
    <ul className="nav-links">
      <Link to="/"><li>Inserir contato</li></Link>
      <Link to="/listar"><li>Listar contatos</li></Link>
      <Link to="/deletar"><li>Deletar contato</li></Link>
      <Link to="/modificar"><li>Modificar contato</li></Link>
    </ul>
    </div>

<Switch>
  <Route exact path="/">
      <Criar />
  </Route>
  <Route path="/listar">
  <Listar />
  </Route>
  <Route path="/deletar">
    <Deletar />
  </Route>
  <Route path="/modificar">
<Modificar />
  </Route>
  <Route path="/modificar2/:id" component={Modificar2}>
<Modificar2 />
  </Route>



</Switch>

    </Router>
  );
}

export default App;
