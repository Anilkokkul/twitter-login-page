import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="home">
        <div className="left">
          <img src="back-twitter1.png" alt="img-logo" />
        </div>
        <div className="right">
          <img src="/twitter-logo-4 1.png" alt="twitter-logo" />
          <h1>Happening Now</h1>
          <h3>Join Twitter today</h3>
          <Link to="google-signin">
            <button>
              <img src="/google-icon 1.png" alt="" />
              <span>Sign up with Google</span>
            </button>
          </Link>
          <Link to="apple-signin">
            <button>
              <img src="/logo-apple 1.png" alt="" />
              <span>Sign up with Apple</span>
            </button>
          </Link>
          <Link to="/signup">
            <button>Sign up with phone or email</button>
          </Link>
          <p>
            By singing up you agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>
            .
          </p>
          <div>
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>About</div>
        <div>Hepl Center</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div>Cookie Policy</div>
        <div>Ads Info</div>
        <div>Blogs</div>
        <div>Carres</div>
        <div>Brand Resources</div>
        <div>Advertising</div>
        <div>Marketing</div>
        <div>Twitter for Business</div>
        <div>Developers</div>
        <div>Directory</div>
        <div>Settings</div>
        <div>&copy; 2021 Twitter,Inc </div>
      </div>
    </div>
  );
}

export default App;
