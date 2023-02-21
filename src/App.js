import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Visualize from "./Visualize/Visualize"

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Visualize />} />
      </Routes>
    </HashRouter>
  )
}

export default App