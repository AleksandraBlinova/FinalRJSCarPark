import React, { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import NavBar from "./components/NewNavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomeSection/HomeTogether";
import Offers from "./pages/OfferSection/index";
import form from "./pages/forms/Form";
import Contacts from "./pages/ContactsSection/ContactsInfo/Contacts";
import Cars from "./pages/CarsSection/Cars";
import FormL from "./pages/forms/FormL";
import FormLogOut from "./pages/forms/FormLogOut";
import CarSport from "./pages/Sport/CarSport";

function App() {
  const [role, setRole] = useState(2); // 0 - guest; 1 - client; 2 - admin

  const changeRole = (data) => {
    setRole(data);
  };

  return (
    <>
      <Router>
        <NavBar role={role} setRole={changeRole} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signin" component={form} />
          <Route path="/carsport" component={CarSport} />
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
