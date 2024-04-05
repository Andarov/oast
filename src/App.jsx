import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Faq from './pages/Faq'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App