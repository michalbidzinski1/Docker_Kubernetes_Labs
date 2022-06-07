import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://backend-service:5000/api`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
