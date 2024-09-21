import { useRef, useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (event) => {
    event.preventDefault(); // Mencegah form reload
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="/netflix.png" alt="Logo" />
          <Link to="/login">
            <button className="loginButton">Login</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Email address"
              ref={emailRef}
              required
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input" onSubmit={handleFinish}>
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <button className="registerButton" type="submit">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
