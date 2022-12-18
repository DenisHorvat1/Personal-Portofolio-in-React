import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../styles/Database.css";

function Database() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("succes");
    });
  };

  return (
    <div className="information">
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age:</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label>Country:</label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />
      <label>Positon:</label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <label>Wage:</label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
      />
      <button onClick={addEmployee}></button>
    </div>
  );
}

export default Database;
