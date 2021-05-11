import { useEffect } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qualquer coisa</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>
          <tr>
            <td>Qualquer coisa</td>
            <td className="withdraw">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>
          <tr>
            <td>Qualquer coisa</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
