import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

let startingInvest;

function App() {
  const [result, setResult] = useState(null);
  const formHandler = (userData, initialInvest) => {
    setResult(userData);
    startingInvest = initialInvest;
  };
  return (
    <div>
      <Header />
      <Form onForms={formHandler} />
      {result && <Table results={result} startInvest={startingInvest} />}
      {!result && (
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          No Investments made
        </p>
      )}
    </div>
  );
}

export default App;
