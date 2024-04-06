import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Faq from './pages/Faq'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Presale from './pages/Presale'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/presale' element={<Presale/>} />
          <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App