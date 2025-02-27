import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import "./Login.css";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Spostato qui

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Reindirizza alla dashboard dopo il login
    } catch (error) {
      setError("Failed to login. Please check your email and password.");
      console.error("Login error:", error); // Debug
    }
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="login-page">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <div></div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={isVisible ? "text" : "password"}
                  value={password}
                  id="password"
                  placeholder="Enter your password"
                  required
                />
                <div onClick={handleVisibility}>
                  {isVisible ? (
                    <FaRegEye size={15} />
                  ) : (
                    <FaRegEyeSlash size={15} />
                  )}
                </div>
              </div>
            </div>
            <button className="btn auth" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
