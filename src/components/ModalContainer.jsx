import React, { useState, useEffect } from "react";
import MainModal from "./MainModal";
import WalletModal from "./WalletModal";

const ModalContainer = ({handleCloseModal}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailInputValue, setEmailInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setEmailInputValue(inputValue);
    setIsValid(emailRegex.test(emailInputValue));
  };

  const [walletModal, setWalletModal] = useState(false);
  const [mainModal, setMainModal] = useState(true);

  const showWalletModal = () => {
    setWalletModal(true);
    setMainModal(false);
  };
  
  const showMainModal = () => {
    setMainModal(true);
    setWalletModal(false);
  };

  return (
      <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.25)] backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
        {!walletModal && mainModal && <MainModal handleCloseModal={handleCloseModal} isValid={isValid} handleSubmit={handleSubmit} showWalletModal={showWalletModal}/>}
        {walletModal && !mainModal && <WalletModal showMainModal={showMainModal}/>}
      </div>
  );
};

export default ModalContainer;
