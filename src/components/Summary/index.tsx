import * as S from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

export const Summary = () => {
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="" />
        </header>
        <strong>R$ 1800,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="" />
        </header>
        <strong>- R$ 1800,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="" />
        </header>
        <strong>R$ 1800,00</strong>
      </div>
    </S.Container>
  );
};
