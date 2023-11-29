import "./App.scss";

function App() {
  return (
    <>
      <div className="popup-container flexible-mapper-container">
        <div className="header">
          <img src="/images/gender.svg" alt="Flexy" />
          <h1>Flexmap</h1>
        </div>
        <div className="form">
          <label>Snippets</label>
          <input
            type="button"
            id="youtube_timestamp"
            value="Get Youtube Timestamp"
          />
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
    </>
  );
}

export default App;
