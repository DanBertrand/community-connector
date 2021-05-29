import * as authActions from "./authActions";
import { displaySuccess, displayError } from "../flashmessages/flashMiddleware";

import Cookies from "js-cookie";

export const fetchToRegister = (data) => {
  return async (dispatch) => {
    const API_URL = "https://api-community-connector.herokuapp.com/";
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const dataError = await response.json();
        console.log("Une erreur est survenue:", dataError);
        dispatch(authActions.registerFail());
        Cookies.remove("token");
        dispatch(displayError("Erreur d'enregistrement"));
        return false;
      }
      const token = await response.headers.get("authorization").split(" ")[1];
      const user = await response.json();
      const userToRegister = { token, user };
      dispatch(authActions.registerSuccess(userToRegister));
      Cookies.set("token", token);
      dispatch(displaySuccess("Inscription réussie"));
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchToLogin = (data) => {
  return async (dispatch) => {
    const API_URL = "https://api-community-connector.herokuapp.com/";
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log("Une erreur est survenue:", response.statusText);
        dispatch(authActions.loginFail());
        Cookies.remove("token");
        dispatch(displayError("Aucun utilisateur correspondant"));
        return false;
      }

      console.log("login response", response);

      const token = await response.headers.get("authorization").split(" ")[1];
      const user = await response.json();
      const userToLog = { token, user };
      dispatch(authActions.loginSuccess(userToLog));
      Cookies.set("token", token);
      dispatch(displaySuccess("Connexion réussie"));
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCurrentUser = (token) => {
  return async (dispatch) => {
    const API_URL = "https://api-community-connector.herokuapp.com/";
    try {
      const response = await fetch(`${API_URL}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const user = await response.json();
      const userToLoad = { token, user };
      dispatch(authActions.loadCurrentUser(userToLoad));
    } catch (error) {
      console.log(error);
      dispatch(authActions.loginFail());
      Cookies.remove("token");
    }
  };
};

export const fetchToLogout = (token) => {
  return async (dispatch) => {
    const API_URL = "https://api-community-connector.herokuapp.com/";
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.log("token", token);
        console.log("response", response.json());
        throw Error(response.statusText);
      }
      dispatch(authActions.logoutSuccess());
      Cookies.remove("token");
      dispatch(displaySuccess("Déconnexion réussie"));
    } catch (error) {
      console.log(error);
      dispatch(authActions.logoutFail());
      dispatch(
        displayError(
          "Un problème est survenu, merci de réessayer ultérieurement"
        )
      );
      return false;
    }
  };
};
