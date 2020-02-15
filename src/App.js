import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import Header from "./components/common/header";
import MovieForm from "./components/movieform";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div style={{ marginTop: "60px" }}>
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customer" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
