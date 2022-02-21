import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NewNavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomeSection/HomeTogether";
import Offers from "./pages/OfferSection/index";
import form from "./pages/forms/Form";
import Contacts from "./pages/ContactsSection/ContactsInfo/Contacts";
import Cars from "./pages/CarsSection/Cars";
import FormL from "./pages/forms/FormL";
import FormLogOut from "./pages/forms/FormLogOut";
import ConfMain from "./pages/ConfiguratorSection/ConfMain/ConfMain";
import Mazda6OptionsMain from "./pages/ConfiguratorSection/Mazda6Options/Mazda6OptionsMain";
import MazdaCX5OptionsMain from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5OptionsMain";
import MazdaCX9OptionsMain from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9OptionsMain";
import Mazda6EquipDetails from "./pages/ConfiguratorSection/Mazda6Options/Mazda6EquipDetails/Mazda6EquipDetails";
import MazdaCX5EquipDetails from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5EquipDetails/MazdaCX5EquipDetails";
import MazdaCX9EquipDetails from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9EquipDetails/MazdaCX9EquipDetails";

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
          <Route path="/configurator" component={ConfMain} />
          <Route path="/mazda6config" component={Mazda6OptionsMain} />
          <Route path="/mazdacx5config" component={MazdaCX5OptionsMain} />
          <Route path="/mazdacx9config" component={MazdaCX9OptionsMain} />
          <Route path="/mazda6equipdetails" component={Mazda6EquipDetails} />
          <Route
            path="/mazdacx5equipdetails"
            component={MazdaCX5EquipDetails}
          />
          <Route
            path="/mazdacx9equipdetails"
            component={MazdaCX9EquipDetails}
          />

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
