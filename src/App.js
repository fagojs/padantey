import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import DashboardPage from "./components/dashboard/dashboard-page/dashboard-page.component";
import SellNote from "../src/components/buy-sell/sell-note/sell-note.component";
import BuyNote from "./components/buy-sell/buy-note/buy-note.component";
import Signup from "./components/signup-signin/signup/signup.component";
import Signin from "./components/signup-signin/signin/signin.component";
import Header from "../src/components/header/header.component";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      const deocededToken = jwt_decode(storedToken);
      setCurrentUser(deocededToken);
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      }
    }
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/buy-note" component={BuyNote} />
        <Route path="/sell-note" component={SellNote} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
