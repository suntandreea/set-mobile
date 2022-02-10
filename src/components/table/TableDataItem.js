function TableDataItem(props) {
  return (
    <tr>
      <td>{props.crt}</td>
      <td>{props.paymentId}</td>
      <td>{props.invoiceId}</td>
      <td>{props.type}</td>
      <td>{props.invoiceSerial}</td>
      <td>{props.invoiceNumber}</td>
      <td>{props.date}</td>
      <td>{props.invoiceValue}</td>
    </tr>
  );
}

export default TableDataItem;