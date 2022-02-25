import { Container } from './styles';
import totalImg from '../../assets/total.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt='income' />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt='outcome' />
        </header>
        <strong>-R$100,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='total' />
        </header>
        <strong>R$900,00</strong>
      </div>
    </Container>
  );
}
