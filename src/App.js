import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table,Checkbox,Button,Icon } from 'semantic-ui-react'

/*import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

import "ag-grid-enterprise";
import {LicenseManager} from "ag-grid-enterprise/main";

LicenseManager.setLicenseKey("infocrunch.in_Survey_Manager_1Devs18_August_2018__MTUzNDU0NjgwMDAwMA==5c0b132c9a57ad7b177b1ab7d1bd5cf4");
*/
class App extends Component {
  state={
    rowData:[],
    collapse:false
  }
  componentDidMount(){
    let rowData=[];
    let row={};
    for(var index=0;index<7;index++){
      row={selection:false,type:"type"+(index+1),name:"name"+(index+1),title:"title"+(index+1),phone:"phone"+(index+1),ext:"ext"+(index+1),fax:"fax"+(index+1),email:"email"+(index+1)}
      rowData.push(row);
    }
    this.setState({rowData:rowData})
  }
  checkBoxClick=(index)=>{
    debugger

  }
  onCollapse=()=>{
    this.setState({collapse:!this.state.collapse})
  }
  render() {
    let that=this


    return (
      <div className="App">
        <div>
        <h2 style={{padding:20,color:"#00b5ad",float: 'left'}}>External Contacts</h2>
         <div style={{float: 'right',padding: 20,float: 'right'}}>
            <Button icon labelPosition='left'  onClick={this.onCollapse}>
               <Icon name={this.state.collapse?'plus':'minus'} />
                 {this.state.collapse?'Expand':'Collapse'}
             </Button>
         </div>
        </div>
        <div style={{padding:10}}>
        <Table celled striped >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Selection</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Type</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Name</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Title</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Phone</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Ext.</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Fax</Table.HeaderCell>
              <Table.HeaderCell style={{color:"#00b5ad"}}>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
        {!this.state.collapse? this.state.rowData.map(function (row,index) {
              return   (<Table.Row key={index}>
                  <Table.Cell ><Checkbox/></Table.Cell>
                  <Table.Cell>{row.type}</Table.Cell>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.title}</Table.Cell>
                  <Table.Cell>{row.phone}</Table.Cell>
                  <Table.Cell>{row.ext}</Table.Cell>
                  <Table.Cell>{row.fax}</Table.Cell>
                  <Table.Cell>{row.email}</Table.Cell>
                </Table.Row>)
           }):""
         }
          </Table.Body>
        </Table>
        </div>
      </div>
    );
  }
}

export default App;
