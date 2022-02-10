import { useState, useEffect } from 'react';
import TableDataList from './TableDataList';
import './TableCard.scss';

function TableCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPayments, setLoadedPayments] = useState([]);

  function loadData() {
    setIsLoading(true);
    fetch('https://aqmeter.com/app/api/payment-history/test')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const payments = [];
        let crt = 1;
        for (const elem of data) {
          const payment = {
            crt: crt,
            ...elem,
          };
          crt++;
          payments.push(payment);
        }
        setIsLoading(false);
        setLoadedPayments(payments);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  function calcSum(payments) {
    let sum = 0.0;
    for (const payment of payments) {
      sum += payment.invoiceValue;
    }
    return sum.toFixed(2);
  }

  return (
    <section className="card stats">
      <div className="card-content">
        <h3>Table</h3>
        <p>A simple table example:</p>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Payment ID</th>
              <th>Invoice ID</th>
              <th>Doc Type</th>
              <th>Inv Serial</th>
              <th>Inv No.</th>
              <th>Date</th>
              <th>Value</th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody><tr><td colSpan="8">Loading...</td></tr></tbody>
          ) : (
            <TableDataList payments={loadedPayments} />
          )}
          <tfoot>
            <tr>
              <td colSpan="7"></td>
              <td>{calcSum(loadedPayments)}</td>
            </tr>
          </tfoot>
        </table>
        <button onClick={loadData}><i className="fa-solid fa-arrows-rotate"></i><span></span>Load Data</button>
      </div>
    </section>
  );
}

export default TableCard;
