import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from "./Components/Table/LandingPage";
import AddRecord from "./Components/Operations/AddRecord";
import DeleteRecord from "./Components/Operations/EditRecord";
import EditRecord from "./Components/Operations/EditRecord";
import UploadRecord from "./Components/Operations/UploadRecord";
import "react-table/react-table.css";

class App extends React.Component {

  render() {

    return (
      <Router>
      <div >
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/addrecord" component={AddRecord}/>
        <Route exact path="/editrecord/:id" component={EditRecord}/>
        <Route exact path="/deleterecord/:id" component={DeleteRecord}/>
        <Route exact path="/upload" component={UploadRecord}/>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Router>
    );
  }
}
export default App;
