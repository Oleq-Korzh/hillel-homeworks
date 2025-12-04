import { useState } from "react";
import "./AuthPage.css";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../store/features/auth";
import { useSelector } from "react-redux";

function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() !== "" && password.trim() !== "") {
      dispatch(loginAsync({ username, password }));
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <form className="AuthForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
    </>
  );
}

export default AuthPage;
