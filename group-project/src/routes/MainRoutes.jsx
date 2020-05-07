import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import SignIn from "../page/cobaSigninRedux";
import Home from "../pages/Home";
import Mosque from "../pages/Mosque";
import ShowWaktuSholat from "../pages/ShowWaktuSholat";
// import Profil from "../page/profil";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mosque" component={Mosque} />
          <Route exact path="/prayertimes" component={ShowWaktuSholat} />
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exact path="/profil" component={Profil} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
