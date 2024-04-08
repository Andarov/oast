import React, { useEffect, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
// pages
import Faq from './pages/Faq'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Presale from './pages/Presale'

const App = () => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleOpenModal = () => {
    setModal(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout modal={modal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>}>
          <Route index element={<Home handleOpenModal={handleOpenModal}/>} />
          <Route path='/help' element={<Faq/>} />
          <Route path='/join-presale' element={<Presale handleOpenModal={handleOpenModal}/>}/> {/* handleOpenModal ni Presale komponentiga uzatish */}
          <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
