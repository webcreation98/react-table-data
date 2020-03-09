import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
class ModalEdit extends Component {
    state = {
        editState: ''
      }
      componentWillMount() {
        this.setState({
            editState: {...this.props.editState}
        })
      }
    updateInput(e){
        this.setState({number : e.target.value})
        }
    render() { 
        const { editState } = this.props;
        console.log('Modal Data', editState)
        return ( <React.Fragment>
              <Modal
                      show ={this.props.showedit}
                      onHide={this.props.close}
                        
                       >
                       <Modal.Header>
                           <Modal.Title id="contained-modal-title-vcenter">
                               fdfgfgfggf List Data  
                           </Modal.Title>
                       </Modal.Header>
                       <Modal.Body>
             
                              <div className="form-section">
                                 <p><span className="modal-lable">Number:</span> <input defaultValue={this.state.editState.name} onChange={(e) => this.updateInput(e)}/></p>
                                 <p><span className="modal-lable">Name:</span> <input /></p>
                                 <p><span className="modal-lable">Date:</span> <input /></p>
                                 <p><span className="modal-lable">Edited Date:</span> <input    /></p>
                                 <p><span className="modal-lable">Author:</span> <input   /></p>
                            </div>
                        </Modal.Body>
                       <Modal.Footer>

                           <Button variant="danger" onClick={this.props.close}>Close</Button>
                           <Button variant="primary">Save</Button>
                       </Modal.Footer>
               </Modal>
        </React.Fragment> );
    }
}
 
export default ModalEdit;