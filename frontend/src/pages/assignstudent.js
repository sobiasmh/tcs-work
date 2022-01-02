import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {DropdownButton,Dropdown, Button} from 'react-bootstrap';
import './AssignStudent.css';

function AssignStudent() {
  return (
    <div className="App">
      
        Select Student
        
        <div  className='menu'>
      <DropdownButton id="dropdown-basic-button" title="Student">
  <Dropdown.Item href="#/action-1">Sobia Zulfiqar</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Urooj Murtaza</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Max Well</Dropdown.Item>
</DropdownButton>
</div>
Select Class
        
<div  className='menu'>
<DropdownButton id="dropdown-basic-button" title="Class">
<Dropdown.Item href="#/action-1">BCS-6A</Dropdown.Item>
<Dropdown.Item href="#/action-2">BCS-6B </Dropdown.Item>
<Dropdown.Item href="#/action-3">BCS-6C</Dropdown.Item>
</DropdownButton>
</div>
<div className="menu">
<Button variant="primary">Submit</Button>
</div>


    </div>
  );
}

export default AssignStudent;
