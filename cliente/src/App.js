import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Projects from './components/projects/Projects';



function App() {
  return (
    <Router>
      {/* Esta  lo que se puede ver en todas las paginas*/}
      <Switch> 
        {/* Dentro de Switch esta lo que se puede ver dentro de las 
        diferentes paginas */}
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
