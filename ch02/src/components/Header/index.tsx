import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionNewModal: () => void;
}

export function Header({ onOpenNewTransactionNewModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='finance' />
        <button onClick={onOpenNewTransactionNewModal}>New transaction</button>
      </Content>
    </Container>
  );
}
