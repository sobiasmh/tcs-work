import React from "react";

import "./GetMaterial.css";
function GetMaterial() {
  const getMaterial = (id) => {
    try {
      axios.get(`http://localhost:3000/student/material`)
      .then((res) => setData(res))
    } catch (error) {
      console.log(error)
    }
  }
  const [id, setID] = React.useState()
  const [data, setData] = React.useState()
  return (
    <div className="home">
      <div className="home-courses">
        <h1 className="home-heading">All Material</h1>

        <table>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Assignment</th>
            <th>Quizes</th>
          </tr>
          <tr>
            <td>Max Well</td>
            <td>Mobile Deveploment</td>
            <td>7</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Sobia Zulfiqar</td>
            <td>Theory Of Computing</td>
            <td>3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Urooj Murtaza</td>
            <td>Machine Learning</td>
            <td>9</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Ali Raheem</td>
            <td>Mobile Application Deveploment</td>
            <td>9</td>
            <td>5</td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  );
}

export default GetMaterial;