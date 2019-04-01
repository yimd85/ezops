import React from "react";
import { Button, Form } from 'react-bootstrap';
import axios from "axios";
import "react-table/react-table.css";
import BackButton from './BackButton';

class AddRecord extends React.Component {
  state = {
      alcohol: false,
      tabacco: false
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/addrecord', {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        alcohol: this.state.alcohol,
        tabacco: this.state.tabacco,
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
        <div style={{margin: '10px', width: '500px'}}>
        <BackButton />
        <Form onSubmit={this.handleSubmit} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter first name" 
                    required 
                    onChange={(event) => this.setState({ first_name: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter last name"
                    required
                    onChange={(event) => this.setState({ last_name: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Alcohol"
                    value={this.state.alcohol} 
                    onChange={() => this.setState({ alcohol: !this.state.alcohol }) } 
                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Tabacco"
                    value={this.state.tabacco} 
                    onChange={() => this.setState({ tabacco: !this.state.tabacco }) } 
                />
            </Form.Group>
            <Button type="submit" value="Submit" >Save User</Button>
        </Form>
        </div>
    );
  }
}
export default AddRecord;