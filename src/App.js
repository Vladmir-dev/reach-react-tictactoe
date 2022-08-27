import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game, Home } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
