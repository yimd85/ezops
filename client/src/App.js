import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from "./LandingPage";
import CreateRecord from "./CreateRecord";
import "react-table/react-table.css";

class App extends React.Component {

  render() {

    return (
      <Router>
      <div >
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/createrecord" component={CreateRecord}/>
      </div>
    </Router>
    );
  }
}
export default App;
