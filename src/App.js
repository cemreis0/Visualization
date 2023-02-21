import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Visualize from "./Visualize/Visualize"

function App() {
  return (
    <Routes>
      <HashRouter>
        <Route path="/Visualization" element={<Visualize />} />
      </HashRouter>
    </Routes>
  )
}

export default App