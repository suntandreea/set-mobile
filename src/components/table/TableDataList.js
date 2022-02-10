import TableDataItem from './TableDataItem';

function TableDataList(props) {
  return (
    <tbody>
      {props.payments.map((payment) => (
        <TableDataItem
          key={payment.crt}
          crt={payment.crt}
          paymentId={payment.erpPaymentId}
          invoiceId={payment.erpInvoiceId}
          type={payment.documentType}
          invoiceSerial={payment.invoiceSerial}
          invoiceNumber={payment.invoiceNumber}
          date={payment.documentDate}
          invoiceValue={payment.invoiceValue}
        />
      ))}
    </tbody>
  );
}

export default TableDataList;
