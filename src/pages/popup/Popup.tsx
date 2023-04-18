import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.scss";

const Popup = () => {
  return (
    <div className="App">
      <div className="popup-container">
        <div className="header">
          {/* <img src="/images/gender.svg" alt="Flexy" /> */}
          <img src={logo} alt="Flexmap" />
          <h1>Flexmap</h1>
        </div>
        <div className="form">
          <label for="">Snippets</label>
          <input type="button" id="youtube_timestamp" value="Get Youtube Timestamp" />
          <input type="button" id="fetch_foo" value="Fetch Foo" />
          <input type="button" id="fetch_bar" value="Fetch Bar" />
        </div>
        <div className="notifications">
          <p id="notification"></p>
        </div>
        <div className="video-controls-container">
          <h3>Video controls</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
