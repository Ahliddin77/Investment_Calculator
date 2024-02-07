import classes from "./Form.module.css";
import React, { useState } from "react";

const initialInput = {
  "current-savings": 1000,
  "yearly-contribution": 50,
  "expected-return": 7,
  duration: 10
};

function Form(props) {
  const [userInput, setUserInput] = useState(initialInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    calculateHandler(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialInput);
    props.onForms(null, null);
  };

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        numYear: i + 1,
        totalSavings: currentSavings,
        interest: yearlyInterest,
        yearlyCont: yearlyContribution
      });
    }
    props.onForms(yearlyData, +userInput["current-savings"]);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
