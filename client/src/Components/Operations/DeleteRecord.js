import React from "react";
import BackButton from './BackButton';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";
import "react-table/react-table.css";

class DeleteRecord extends React.Component {
  state = {}


  componentDidMount() {
    axios.get(`/api/edit`, {
        params: { id: this.props.match.params.id},
    })
    .then((res)=> this.setState({
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        alcohol: res.data[0].alcohol,
        tabacco: res.data[0].tabacco,
      }));
    }
  handleSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    await axios.delete(`/api/delete`, {
        params: { id: this.props.match.params.id},
    })
    .then(()=> {
        this.props.history.goBack();
    });
  }

  render() {
    console.log(this.state.delete)
    return (
      <div style={{margin: '30px'}}>
      <BackButton />
      <Form onSubmit={this.handleSubmit} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter first name" 
                    required
                    value={this.state.first_name} 
                    disabled
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter last name"
                    required
                    value={this.state.last_name}
                    disabled
                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Alcohol"
                    checked={this.state.alcohol} 
                    disabled
                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Tabacco"
                    checked={this.state.tabacco} 
                    disabled
                />
            </Form.Group>
            <Button className="btn btn-secondary" type="submit" value="Submit" >Delete</Button>
        </Form>
      </div>
      
    ); 
  }
}
export default DeleteRecord;