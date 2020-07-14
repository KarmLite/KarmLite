import React,{Component} from 'react';
import {Table} from 'reactstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {addcontact} from './addcontact';


export class directory extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalshow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        this.setState({
            deps:[{"ID":1,"Name":"Prakruti","Phone":"9876543219","Email":"123@gmail.com","Role":"gg"},
            {"ID":2,"Name":"Prak","Phone":"9876543219","Email":"123@gmail.com","Role":"gg"}]
        })
    }
    render(){
        const{deps}=this.state;
        let addModalClose= ()=> this.setState({addModalshow:false});
        return(
            <div className="employee_table">
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>             
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key ={dep.ID}>
                        <td>{dep.ID}</td>
                        <td>{dep.Name}</td>
                        <td>{dep.Phone}</td>
                        <td>{dep.Email}</td>
                        <td>{dep.Role}</td>
                        </tr>
                        )}
                </tbody>
            </Table>
        <ButtonToolbar>
            <Button
             variant='primary'
             onClick={()=>this.setState({addModalshow:true})}
             >Add Employee</Button>

             <addcontact
             show={this.state.addModalshow}
             onHide={addModalClose}
             />

        </ButtonToolbar>
        </div>    
        )
    }
}