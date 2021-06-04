import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import Cookies from "js-cookie";
import Home from "pages/public/Home/Home";
import Login from "pages/public/Login/Login";
import Register from "pages/public/Register/Register";
import Profile from "pages/public/Profile/Profile";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import CommunityProfile from "./pages/public/CommunityProfile/CommunityProfile";
import CreateCommunity from "./pages/private/CreateCommunity/CreateCommunity";

const App = () => {
  const [loadReady, setLoadReady] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const displayFlash = useSelector((state) => state.flash.display);
  const dispatch = useDispatch();

  const autoLogin = async () => {
    const token = Cookies.get("token");
    if (!currentUser && token) {
      dispatch(fetchCurrentUser(token));
    }
    setLoadReady(true);
  };

  useEffect(() => {
    autoLogin();
  }, [currentUser]);

  return (
    <section className="App">
      <Router>
        <Navbar />
        {displayFlash && <FlashMessage />}
        {loadReady && (
          <Switch>
            <PublicRoute
              restricted={false}
              currentUser={currentUser}
              component={Home}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              currentUser={currentUser}
              component={Login}
              path="/login"
              exact
            />
            <PublicRoute
              restricted={true}
              currentUser={currentUser}
              component={Register}
              path="/register"
              exact
            />
            <PrivateRoute
              currentUser={currentUser}
              component={Profile}
              path="/profile"
              exact
            />
            <PrivateRoute
              currentUser={currentUser}
              component={CreateCommunity}
              path="/new_communtity"
              exact
            />
            <PublicRoute
              currentUser={currentUser}
              component={CommunityProfile}
              path="/community/:id"
              exact
            />
          </Switch>
        )}
        <Footer />
      </Router>
    </section>
  );
};

export default App;
