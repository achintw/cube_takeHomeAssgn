import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {lazy} from 'react'
import Loader from "./components/loader"


// import Dashboard from './pages/dashboard'
// instead of this ^ we will load it lazy 
const Dashboard = lazy(()=>import("./pages/dashboard"))
const Products = lazy(()=>import("./pages/products"))
const Transactions = lazy(()=>import("./pages/transactions"))
const Customers = lazy(()=>import("./pages/customers"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/transactions" element={<Transactions/>}/>

        {/* Charts */}


        {/* Apps */}

        
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App