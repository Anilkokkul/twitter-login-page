import React from "react";
import "./signUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="signup">
        <div className="t-logo">
          <img src="/twitter-logo-4 1.png" alt="twitter-logo" />
        </div>
        <h4>Create an Account</h4>
        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone Number" />
          <Link>Use email</Link>
          <div className="dob-content">
            <h5>Date of birth</h5>
            <p>
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
              sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
              Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
              blandit viverra dignissim eget tellus. Nibh mi massa in molestie a
              sit. Elit congue.
            </p>
          </div>
          <div className="date-container">
            <select>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="23">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select>
              {Array.from({ length: 30 }, (_, index) => (
                <option key={index} value={new Date().getFullYear() - index}>
                  {new Date().getFullYear() - index}
                </option>
              ))}
            </select>
          </div>
          <button>Next</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
