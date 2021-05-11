import Logo from "../../assets/logo.svg";
import * as S from "./styles";

type HeaderProps = {
  onOpenNewTransactionModalOpen: () => void;
};

export const Header = ({ onOpenNewTransactionModalOpen }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Logo dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModalOpen}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
};
