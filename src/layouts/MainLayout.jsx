import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ModalContainer from "../components/ModalContainer";

const MainLayout = ({modal, handleOpenModal, handleCloseModal}) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header handleOpenModal={handleOpenModal}/>
      <main className="grow">
        <div className="w-full max-w-base mx-auto px-5">
          <Outlet />
        </div>
      </main>
      <Footer />
      {modal && <ModalContainer handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default MainLayout;
