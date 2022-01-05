import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomeSection/HomeTogether";
import Offers from "./pages/OfferSection/index";
import form from "./pages/forms/Form";
import Contacts from "./pages/ContactsSection/Contacts";
import Cars from "./pages/CarsSection/Cars";
import FormL from "./pages/forms/FormL";
import FormLogOut from "./pages/forms/FormLogOut";

function App() {
  const [role, setRole] = useState(2); // 0 - guest; 1 - client; 2 - admin

  const changeRole = (data) => {
    setRole(data);
  };

  return (
    <>
      <Router>
        <Navbar role={role} setRole={changeRole} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signin" component={form} />
          <Route
            path="/models"
            render={() => <Cars role={role} setRole={changeRole} />}
          />
          <Route
            path="/login"
            render={() => <FormL role={role} setRole={changeRole} />}
          />
          <Route path="/logout" component={FormLogOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
