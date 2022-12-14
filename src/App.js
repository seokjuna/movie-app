import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./style.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
  
}

export default App;
