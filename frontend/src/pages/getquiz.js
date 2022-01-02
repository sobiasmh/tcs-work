import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './AssignStudent.css';
import {DropdownButton,Dropdown, Button} from 'react-bootstrap';
import axios from 'axios'
import { response } from "express";

function GetQuiz() {
    const getQuiz = (id) => {
      try {
        axios.get(`http://localhost:3000/teacher/quiz/${id}`)
        .then((res) => setData(res))
      } catch (error) {
        console.log(error)
      }
    }
    const [id, setID] = React.useState()
    const [data, setData] = React.useState()
  return (
    <div className="App">
      Select Quiz ID
        
        <div  className='menu'>
          <DropdownButton id="dropdown-basic-button" title="ID" onChange={(e) => setID(e)}>
          <Dropdown.Item href="#/action-1">1234</Dropdown.Item>
          <Dropdown.Item href="#/action-2">4566 </Dropdown.Item>
          <Dropdown.Item href="#/action-3">5488</Dropdown.Item>
        </DropdownButton>
        </div>
        <div>
          <p>{DataTransfer}</p>
        </div>
        <div className="menu">
        <Button onClick={getQuiz(id)} variant="primary">Get Quiz</Button>
        </div>
    </div>
  );
}

export default GetQuiz;