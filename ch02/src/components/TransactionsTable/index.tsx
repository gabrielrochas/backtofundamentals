import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fasçdfj</td>
            <td className="deposit">R$ 12,00</td>
            <td>Desdd</td>
            <td>20/02/21</td>
          </tr>
          <tr>
            <td>fasçdfj</td>
            <td className="withdraw">-R$ 12,00</td>
            <td>Desdd</td>
            <td>20/02/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
