import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dashboard from "./assets/dashboard2.png";

function App() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [screen, setScreen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      toast.error("Username cannot be empty");
      return;
    }
    if (!isValidEmail(username)) {
      toast.error("Invalid email");
      setUsername("");
      return;
    }

    if (!password.trim()) {
      toast.error("Password cannot be empty");
      return;
    }
    if (!isValidPassword(password)) {
      toast.error("Invalid password");
      setPassword("");
      return;
    }

    setScreen(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    return passwordRegex.test(password);
  };

  const renderScreen = () => {
    return (
      <div className="dashboard">
        <img src={dashboard} alt="Dashboard" />
      </div>
    );
  };

  return (
    <>
      {screen ? (
        renderScreen()
      ) : (
        <div className="main">
          <img src={logo} alt="Logo" />
          <div className="details">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <a href="mailto:support@smartserv.io">Forgot your password?</a>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
