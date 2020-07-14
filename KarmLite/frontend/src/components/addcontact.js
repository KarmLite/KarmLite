import React,{Component} from 'react';
import {Modal,Button,Row,Col} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import './signup.css';

export class addcontact extends Component{
    constructor(props){
       super(props);
    }

    render(){
        return(
        <Modal
        className="modalform"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{opacity:1}}
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                to add form fields for directory
            </div>
            <h4>Centered Modal</h4>
            <Form className="addemployeeform">
            <FormGroup>
            <Label>Name</Label>
            <Input type = "name" placeholder= "Name"></Input>
            <Label>Email</Label>
            <Input type = "email" placeholder= "Email"></Input>
            </FormGroup>
            <FormGroup>
            <Label>Phone</Label>
            <Input type = "tel" placeholder= "Phone"></Input>
            </FormGroup>
            <Label>Email</Label>
            <Input type = "text" placeholder= "Role"></Input>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Add</Button>
        </Modal.Footer>
        </Modal>
        );
    }
}
