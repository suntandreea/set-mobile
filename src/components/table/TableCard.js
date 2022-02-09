import './TableCard.scss';

function TableCard() {
  return (
    <section className="card stats">
        <div className="card-content">
          <h3>Table</h3>
          <p>A simple table example:</p>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name 1</td>
                <td>This is a description 1</td>
                <td>21.99</td>
              </tr>
              <tr>
                <td>Name 2</td>
                <td>This is a description 2</td>
                <td>22.99</td>
              </tr>
              <tr>
                <td>Name 3</td>
                <td>This is a description 3</td>
                <td>23.99</td>
              </tr>
              <tr>
                <td>Name 4</td>
                <td>This is a description 4</td>
                <td>24.99</td>
              </tr>
              <tr>
                <td>Name 5</td>
                <td>This is a description 5</td>
                <td>25.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>119.95</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
  );
}

export default TableCard;