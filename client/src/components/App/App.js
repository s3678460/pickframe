import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPage from "../Footer/FooterPage";
import RouterURL from "../RouterURL/RouterURL";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../../store";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <UserProfile />
          {/* <NavigationBar />
          <RouterURL />
          <FooterPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
