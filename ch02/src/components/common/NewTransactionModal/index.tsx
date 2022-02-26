import Modal from 'react-modal';
import { Container } from './styles';


import closeImg from '../../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="close button" />
      </button>
      <Container>
        <h2>Cadastrar coisas</h2>
        <input type='text' placeholder='Description' />
        <input type='number' placeholder='Value' />
        <input type='category' placeholder='Category' />
        <button type='submit'>Save</button>
      </Container>
    </Modal>
  );
}
