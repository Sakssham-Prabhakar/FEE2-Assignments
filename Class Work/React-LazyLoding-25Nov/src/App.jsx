import { useState } from 'react'
import React, { lazy,Suspense } from 'react'
const Home = lazy(() => import('./Home'))
const Cart = lazy(() => import('./Cart'))
const Admin = lazy(() => import('./Admin'))

const App = () => {
  const [page, setPage] = useState("Home")

  return (
    <>
      <h1>My App</h1>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("Cart")}>Cart</button>
      <button onClick={() => setPage("Admin")}>Admin</button>
      <Suspense fallback = {<h1> loding... </h1>}>
      {page === "Home" && <Home />}
      {page === "Cart" && <Cart />}
      {page === "Admin" && <Admin />}
      </Suspense>
    </>
  )
}

export default App