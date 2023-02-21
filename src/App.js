import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Visualize from "./Visualize/Visualize"

function App() {
  return (
      <Router>
          <Route path="/Visualization" element={<Visualize />} />
      </Router>
  )
}

export default App