/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchToRegister } from "../stores/authentication/authMiddleware";
import App from "../App";

const Register = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const register = async (e) => {
    const data = {
      user: {
        email: email,
        role: role,
        password: password,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToRegister(data))) {
      console.log("it awaited ok");
      history.push("/");
    }
  };

  console.log("role", role);

  return (
    <div className="Register">
      <h1>This is register</h1>

      <form onSubmit={register}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>
          Register as :
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="community">Community</option>
          </select>
        </label>{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <input type="submit" value="Valider l'inscription" />
      </form>
    </div>
  );
};

export default Register;
