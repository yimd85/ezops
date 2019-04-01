import React from "react";
import { makeData  } from "./Utils";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import columns from './columns';
import ReactTable from "react-table";
import "react-table/react-table.css";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{margin: '30px'}}>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          showPageSizeOptions={false}
          showPageJump={false}
        />
      </div>
    );
  }
}
export default LandingPage;