import React from "react";
import "react-table/react-table.css";
import axios from "axios";
import BackButton from './BackButton';

class EditRecord extends React.Component {
  state = {};


  componentDidMount() {
    axios.get(`/api/edit`, {
           params: { id: this.props.match.params.id}
    })
    .then((res)=> console.log(res))
  }
  
  render() {
    return (
      <div style={{margin: '30px'}}>
      <BackButton />
        Test
      </div>
    );
  }
}
export default EditRecord;