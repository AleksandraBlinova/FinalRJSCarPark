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
import LegalInformation from "./pages/LegalInformationSection/LegalInformation";
import Mazda6InteriorDrive from "./pages/ConfiguratorSection/Mazda6Options/Mazda6Interior/Mazda6InteriorDrive/Mazda6InteriorDrive";
import Mazda6InteriorActive from "./pages/ConfiguratorSection/Mazda6Options/Mazda6Interior/Mazda6InteriorActive/Mazda6InteriorActive";
import Mazda6InteriorSupremePlus from "./pages/ConfiguratorSection/Mazda6Options/Mazda6Interior/Mazda6InteriorSupremePlus/Mazda6InteriorSupremePlus";
import MazdaCX5InteriorDrive from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5Interior/MazdaCX5InteriorDrive/MazdaCX5InteriorDrive";
import MazdaCX5InteriorActiveLight from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5Interior/MazdaCX5InteriorActiveLight/MazdaCX5InteriorActiveLight";
import MazdaCX5InteriorActiveHard from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5Interior/MazdaCX5InteriorActiveHard/MazdaCX5InteriorActiveHard";
import MazdaCX5InteriorSupreme from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5Interior/MazdaCX5InteriorSupreme/MazdaCX5InteriorSupreme";
import MazdaCX9InteriorSupreme from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9Interior/MazdaCX9InteriorSupreme/MazdaCX9InteriorSupreme";
import MazdaCX9InteriorActive from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9Interior/MazdaCX9InteriorActive/MazdaCX9InteriorActive";
import MazdaCX9InteriorExclusive from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9Interior/MazdaCX9InteriorExclusive/MazdaCX9InteriorExclusive";

import Mazda6Exterior from "./pages/ConfiguratorSection/Mazda6Options/Mazda6Exterior/Mazda6Exterior";
import MazdaCX5Exterior from "./pages/ConfiguratorSection/MazdaCX5Options/MazdaCX5Exterior/MazdaCX5Exterior";
import MazdaCX9Exterior from "./pages/ConfiguratorSection/MazdaCX9Options/MazdaCX9Exterior/MazdaCX9Exterior";

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
          <Route path="/legalinfo" component={LegalInformation} />
          <Route path="/configurator" component={ConfMain} />
          <Route path="/mazda6config" component={Mazda6OptionsMain} />
          <Route path="/mazdacx5config" component={MazdaCX5OptionsMain} />
          <Route path="/mazdacx9config" component={MazdaCX9OptionsMain} />
          <Route path="/mazda6equipdetails" component={Mazda6EquipDetails} />
          <Route path="/mazda6interiordrive" component={Mazda6InteriorDrive} />
          <Route
            path="/mazda6interioractive"
            component={Mazda6InteriorActive}
          />
          <Route
            path="/mazda6interiorsupremeplus"
            component={Mazda6InteriorSupremePlus}
          />
          <Route path="/mazda6exterior" component={Mazda6Exterior} />

          <Route
            path="/mazdacx5interiordrive"
            component={MazdaCX5InteriorDrive}
          />
          <Route
            path="/mazdacx5interioractivehard"
            component={MazdaCX5InteriorActiveHard}
          />
          <Route
            path="/mazdacx5interioractivelight"
            component={MazdaCX5InteriorActiveLight}
          />
          <Route
            path="/mazdacx5interiorsupreme"
            component={MazdaCX5InteriorSupreme}
          />

          <Route path="/mazdacx5exterior" component={MazdaCX5Exterior} />

          <Route
            path="/mazdacx9interioractive"
            component={MazdaCX9InteriorActive}
          />
          <Route
            path="/mazdacx9interiorexclusive"
            component={MazdaCX9InteriorExclusive}
          />
          <Route
            path="/mazdacx9interiorsupreme"
            component={MazdaCX9InteriorSupreme}
          />
          <Route path="/mazdacx9exterior" component={MazdaCX9Exterior} />
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
