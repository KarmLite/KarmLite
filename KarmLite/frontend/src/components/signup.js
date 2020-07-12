import React,{Component} from 'react';
//import logo from './logo.svg';
import 'KarmLite/frontend/templates/frontend/signup.css';

import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {GoogleLoginButton} from 'react-social-login-buttons'

export class signup extends Component{
  render(){
  return (
    <div className="signup-header">
        <Form className="signup-form">
         <h1 className="text-center"><span>KarmLite</span> </h1> 
         <h3 className="text-center">Welcome</h3>
         <FormGroup>
           <Label>Name</Label>
           <Input type = "name" placeholder= "Name"></Input>
         </FormGroup>
         <FormGroup>
           <Label>Email</Label>
           <Input type = "email" placeholder= "Email"></Input>
         </FormGroup>
         <FormGroup>
           <Label>Password</Label>
           <Input type = "password" placeholder= "Password"></Input>
         </FormGroup>
         <Button className= "btn-lg btn-dark btn-block">Create Account</Button>
        <div className="text-center pt-7">Or</div>
        <div className="gbutton">
        <GoogleLoginButton  align="center" className= "mt3 mb3"/>
        </div>
        </Form>
        <a className="signin-link"
          href="/"
          target="_blank"
          //rel="noopener noreferrer"
          >
        Already have an account? Click here to Sign in 
        </a>
    </div>
  );
 }
}


