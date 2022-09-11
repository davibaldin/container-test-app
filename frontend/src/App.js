import React from 'react';
import './App.css';
import { JsonToTable } from "react-json-to-table";
import apiClient from "./ApiClient";

function App() {

  const [systemEnvironment, setSystemEnvironment] = React.useState(null);

  React.useEffect(() => {
    apiClient.get("/system-environment").then((response) => {
      setSystemEnvironment(response.data);
    })
  }, []);

  //const systemEnvironment = apiClient.get("/system-environment").then((response) => {

  return (
    <div className="App">
        <h1>Container test App</h1>
        <p>
          This sample app tests your environemnt in a container deployment.
        </p>
        <h2>Backend API  :: /system-environment</h2>
        <JsonToTable json={systemEnvironment} />
    </div>
  );
}

export default App;
