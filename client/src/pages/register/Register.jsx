import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(""); // Ganti dari username menjadi userName
  const navigate = useNavigate();

  // Menggunakan ref untuk merujuk ke elemen input
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef(); // Ganti dari usernameRef menjadi userNameRef

  // Fungsi untuk memulai dengan email
  const handleStart = () => {
    setEmail(emailRef.current.value); // Mengatur state email dengan nilai dari ref
  };

  // Fungsi untuk menyelesaikan pendaftaran
  const handleFinish = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Pastikan ref sudah ada sebelum mengakses nilainya
    if (!userNameRef.current || !passwordRef.current) {
      console.error("Input fields are not available.");
      return;
    }

    // Mengambil nilai dari ref
    const emailValue = emailRef.current ? emailRef.current.value : email; // Mengambil email dari ref atau state jika sudah diset
    const userNameValue = userNameRef.current.value; // Mengambil userName (ganti dari username)
    const passwordValue = passwordRef.current.value; // Mengambil password

    console.log("Sending data: ", { email: emailValue, userName: userNameValue, password: passwordValue });

    try {
      // Mengirim data ke server melalui POST request menggunakan axios
      await axios.post("/auth/register", {
        email: emailValue,
        userName: userNameValue, // Kirim sebagai userName
        password: passwordValue,
      });

      // Jika berhasil, arahkan pengguna ke halaman login
      navigate("/login");
    } catch (err) {
      // Jika terjadi kesalahan, cetak di konsol
      console.error(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="/netflix.png" alt="Netflix Logo" />
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
        {/* Jika email belum diisi, tampilkan input email */}
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          // Jika email sudah diisi, tampilkan input userName dan password
          <form className="input">
            <input type="text" placeholder="Username" ref={userNameRef} /> {/* Ganti dari usernameRef */}
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
