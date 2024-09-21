import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to="/register">
          <img className="logo" src="/netflix.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Login</button>
          <span>
            New to Netflix?
            <Link to="/register">
              <b> Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
