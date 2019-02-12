import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  App,
  NotFound,
  Dictionary,
  AddWord,
  Word,
  Home,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }

      <Route path="dictionary" component={Dictionary}/>
      <Route path="add" component={AddWord}/>
      <Route path="/word/:id" component={Word}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
