import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ModalDelete from '../components/modalDelete/modlDelete';
import ModalEdit from '../components/modalEdit/modalEdit'
class ProjectsContext extends Component {
    state = {
        show: false,
        showedit: false,  
        modState: ''
      }
      
  componentWillMount() {
    this.setState({
        modState: {...this.props.listdata}
    })
    
  }
  
     
        showModal = () =>{
           //listdata.splice(item, 1)
            this.setState({show:true})
        }
        handleModalclose =() =>{
           this.setState({show:false})
           this.setState({showedit:false})
        }
        showModaledit = (item) =>{
            
           this.setState(item)
            this.setState({showedit:true})
        }
        confirmAction = (item) => {
            let listdata = this.props.listdata;
            //console.log(listdata)
            listdata.splice(item, 1)
           // this.props.listdata(this.state.listdata)
            //this.props.showModal(x); 
            this.setState({show:false})
        };

       
    render() { 
      
     
     
        const { listdata } = this.props;
        console.log('ProjectsContext Data',listdata);
        return ( <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Date Created</th>
                        <th>Date Edited</th>
                        <th>Client Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listdata.map(item =>
                      <tr key={item.id}>
                          <td>{item.number}</td>
                          <td>{item.name}</td>
                          <td>{item.Date}</td>
                          <td>{item.Edited}</td>
                          <td>{item.Author}</td>
                          <td>
                          <Button
                                size={"sm"}
                                variant="success"
                            >
                                <i className="fa fa-eye"></i>
                          </Button>
                            <Button
                                 onClick={  () => {this.showModaledit(item)}}
                                size={"sm"}
                                variant="info"
                                className="ml-2"
                            >
                                <i className="fa fa-pencil"></i>
                            </Button>
                        <Button
                            onClick={  () => {this.showModal(item) }}
                            size={"sm"}
                            variant="danger"
                            className="ml-2"
                        >
                            <i className="fa fa-trash"></i>
                        </Button>
                          </td>
                      </tr>  
                     
                    )} 
                </tbody>
            </Table>
            <ModalDelete
                show={this.state.show}
                close={this.handleModalclose}
                onconfirm={this.confirmAction}
                
            /> 
            <ModalEdit 
              
              editState={this.state.modState}     
                showedit={this.state.showedit}
                close={this.handleModalclose}
                selectedmember={this.state.selectedMember}    
            />  
        </React.Fragment> );
    }
}
 
export default ProjectsContext;