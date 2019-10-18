import React from "react";
import { Switch, Route } from "react-router-dom";
import Child from "./Child";

export default (
  //What does a switch do again?
  <Switch>
    {/* // Route is a selfclosing tag, we are setting params on the root. */}
    <Route path="/:id" component={Child} />
  </Switch>
);
