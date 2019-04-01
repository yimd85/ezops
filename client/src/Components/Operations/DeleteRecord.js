import React from "react";
import BackButton from './BackButton';
import axios from "axios";
import "react-table/react-table.css";

class DeleteRecord extends React.Component {
  state = {}


  componentDidMount() {
    axios.get(`/api/edit`, {
        params: { id: this.props.match.params.id},
 })
 .then((res)=> console.log(res))
}

  handleSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    await axios.get(`/api/edit`, {
        params: { id: this.props.params.id},
    })
    .then(()=> this.setState({ 
        first_name: '',
        last_name: '',
        alcohol: false,
        tabacco: false 
    }))
    .then(()=> {
        this.props.history.goBack();
    });

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
export default DeleteRecord;