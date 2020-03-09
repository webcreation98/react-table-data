import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './images/custom-logo.png';
import Header from '../containers/header/header';
import ModalEdit from '../components/modalEdit/modalEdit'
import './dashboard.scss';

import ProjectsContext from '../context/projectsContext'
class Dashboard extends Component {

    
    state = { 
        show: false,
        
        projects: [
            { 
                id: 1, number: '1', name: 'Seg', Date : "2020/02/16", Edited: "020/02/16", Author:'Rakesh',
               
            },
            { 
               
                id: 2, number: '2', name: 'Seg', Date : "2020/02/16", Edited: "020/02/16", Author:'Rahul',
            },
            { 
               
                id: 3, number: '3', name: 'Seg', Date : "2020/02/16", Edited: "020/02/16", Author:'Ramesh',
            },
           
         ]
     }
   

    render() { 
        
        return ( <React.Fragment>
            <Header/>
            <main className="main">
                <ProjectsContext listdata={this.state.projects}/>
            </main>
         
           
        </React.Fragment> );
    }
}
 
export default Dashboard;