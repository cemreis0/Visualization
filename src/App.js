import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Visualize from "./Visualize/Visualize"

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/Visualization" element={<Visualize />} />
        </Routes>
      </Router>
  )
}

export default App