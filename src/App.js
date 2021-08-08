import { Switch, Route } from "react-router-dom";

import DashboardPage from "./components/dashboard/dashboard-page/dashboard-page.component";
import SellNote from "../src/components/buy-sell/sell-note/sell-note.component";
import BuyNote from "./components/buy-sell/buy-note/buy-note.component";
import Signup from "./components/signup-signin/signup/signup.component";
import Signin from "./components/signup-signin/signin/signin.component";
import Header from "../src/components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
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
