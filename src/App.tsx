import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModalOpen = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModalOpen = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header
        onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
