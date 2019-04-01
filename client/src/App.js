import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import columns from './columns';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
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
export default App;
