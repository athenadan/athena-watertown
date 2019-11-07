import React from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import Nav from "./Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* When the url is at root, load the users component */}
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      <Route path="/user" component={ManageUser} />
    </>
  );
}

export default App;
