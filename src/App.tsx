import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {lazy} from 'react'
import Loader from "./components/loader"

// lazy loading
const Assgn = lazy(()=>import("./pages/assgn"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/assgn" element={<Assgn/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
