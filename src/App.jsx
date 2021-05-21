import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Caculator from '././pages/calculator/Caculator';
import Topbar from '././components/topbar/Topbar';

const App = () => {

  return (
    <>
      <Router>
        <CssBaseline />
        <Topbar />
        <Switch>
          <Route path="/" exact component={Caculator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;