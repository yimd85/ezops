import React from "react";
import BackButton from './BackButton';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";
import "react-table/react-table.css";

class EditRecord extends React.Component {
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
    await axios.put(`/api/editing`, {
        params: { 
          id: this.props.match.params.id,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          alcohol: this.state.alcohol,
          tabacco: this.state.tabacco,
        },
    })
    .then(()=> {
        this.props.history.goBack();
    });
  }

  render() {
    console.log(this.state)
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
                    onChange={(event) => this.setState({ first_name: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter last name"
                    required
                    value={this.state.last_name}
                    onChange={(event) => this.setState({ last_name: event.target.value })}

                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Alcohol"
                    checked={this.state.alcohol} 
                    onChange={() => this.setState({ alcohol: !this.state.alcohol }) } 
                />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Tabacco"
                    checked={this.state.tabacco} 
                    onChange={() => this.setState({ tabacco: !this.state.tabacco }) } 
                />
            </Form.Group>
            <Button className="btn btn-secondary" type="submit" value="Submit" >Update</Button>
        </Form>
      </div>
    );
  }
}
export default EditRecord;