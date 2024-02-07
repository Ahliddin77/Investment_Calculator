import classes from "./Table.module.css";
import Row from "../Row/Row";

function Table(props) {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((el, index) => (
          <Row data={el} startingInvest={props.startInvest} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
