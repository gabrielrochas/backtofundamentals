import { useState } from 'react';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/common/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onOpenNewTransactionNewModal={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
    </TransactionsProvider>
  );
}
