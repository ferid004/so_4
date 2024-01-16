import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../src/assets/sass/main.scss'
import MainLayout from './layout/mainLayout'
import Home from './page/home'
import Add from './page/add'
import Wish from './page/wish'
import Detail from './page/detail'
import { WishProvider } from './context/wishContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelmetProvider>

<WishProvider>

        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout></MainLayout>} path='/'>
              <Route element={<Home></Home>} index></Route>
              <Route element={<Add></Add>} path='/add'></Route>
              <Route element={<Wish></Wish>} path='/wish'></Route>
              <Route element={<Detail></Detail>} path='/detail/:id'></Route>
            </Route>
          </Routes>

        </BrowserRouter>
</WishProvider>

      </HelmetProvider>
    </>
  )
}

export default App
