function Row(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return (
    <tr>
      <td>{props.data.numYear}</td>
      <td>{formatter.format(props.data.totalSavings)}</td>
      <td>{formatter.format(props.data.interest)}</td>
      <td>
        {formatter.format(
          props.data.totalSavings -
            props.startingInvest -
            props.data.yearlyCont * props.data.numYear
        )}
      </td>
      <td>
        {formatter.format(
          props.startingInvest + props.data.yearlyCont * props.data.numYear
        )}
      </td>
    </tr>
  );
}

export default Row;
