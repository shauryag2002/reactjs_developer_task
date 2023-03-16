import "./App.css";
import "./styles/style.css";
import usernameLogo from "./images/username logo.svg";
import passwordLogo from "./images/password logo.svg";
import logo from "./images/Group 2.svg";
import white from "./images/white_backg.svg";
import axois from "axios";
function App() {
  const login = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
      username: username,
      password: password,
    };
    const req = await axois.post("https://reqres.in/api/login", data);
    console.log(req);
  };
  return (
    <div className="main-container">
      <div className="left">
        <img src={white} alt="logo" className="mainLogoImage" />
        <div className="loginForm">
          <div className="heading1">
            <div className="main-heading">Welcome</div>
            <div className="sub-heading">
              Enter your Username and Passoword.
            </div>
          </div>
          <div className="form">
            <div className="inputWrapper">
              <img src={usernameLogo} alt="username logo" />
              <input
                type="text"
                className="username"
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="inputWrapper">
              <img src={passwordLogo} alt="password logo" />
              <input
                type="password"
                className="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <button className="buttonWrapper" onClick={login}>
              Login
            </button>
            <button className="forget">Forgot Password?</button>
          </div>
        </div>
        <div className="footer">
          <div className="footer1">
            <div className="term">Terms of Use</div>
            <div className="policy">Privacy Policy</div>
          </div>
          <div className="footer2">
            <div>© Punctualiti 2022. All rights reserved</div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="logo img" className="logoItem" />
        <div className="title">
          <div className="subTitle1 subtitle">
            360° Solution for Asset Management
          </div>
          <div className="subTitle2 subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
