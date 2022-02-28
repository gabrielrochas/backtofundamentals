import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import incomeImg from '../../../assets/income.svg';
import outcomeImg from '../../../assets/outcome.svg';

import closeImg from '../../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='close button' />
      </button>
      <Container>
        <h2>Cadastrar coisas</h2>
        <input type='text' placeholder='Description' />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='income' />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='outncome' />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type='number' placeholder='Value' />
        <input type='category' placeholder='Category' />
        <button type='submit'>Save</button>
      </Container>
    </Modal>
  );
}
