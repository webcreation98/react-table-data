import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
class ModalDelete extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <main className="wrapper">
            <Modal
                      show ={this.props.show}
                      onHide={this.props.close}
                       >
                       <Modal.Header>
                           <Modal.Title id="contained-modal-title-vcenter">
                               Your table body row will be deleted   
                           </Modal.Title>
                       </Modal.Header>
                       <Modal.Body>
                            Are You Sure to delete? 
                       </Modal.Body>
                       <Modal.Footer>
                            <Button variant="danger" onClick={this.props.close}>Close</Button>
                            <Button variant="primary" onClick={this.props.onconfirm}>Delete</Button>
                       </Modal.Footer>
               </Modal>
             </main>
           
         </React.Fragment>
         );
    }
}
 
export default ModalDelete;
