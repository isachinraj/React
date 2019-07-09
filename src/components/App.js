import React from 'react';

//import { BrowserRouter, Route, Link } from 'react-router-dom';
//Browser router has its own history object and it can be used to navigate through pages
//But to use this in actions, we need to pass the history object from component to actions as a parameter
//To avoid this complication, we do not use the history object of BrowserRouter. 
//Instead we create our own custom history object to maintain the history (hisotry.js component file in our case)
//This history object is created from Router fucntion of react-router-dom
//Note: we can still use browser router. But in the scenarios where we need to navigate form actions call,
//then we use custom hsitory object from router.

import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history} >
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
