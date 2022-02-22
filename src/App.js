import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/cadastro" exact component={Cadastro}/>
      <Route path="/home" exact component={Home}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
