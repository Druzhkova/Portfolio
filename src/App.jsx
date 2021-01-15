import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Resume,  Portfolio, Contacts } from './pages';
 
function App() {
  return(
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )       
}

export default App;
