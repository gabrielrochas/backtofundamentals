import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then((response) => console.log(response.data));
  }, [])  
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