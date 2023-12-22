import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, DetailsPage, Success, Cancel } from "./ExportedFile"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/products/detail/:id" element={<DetailsPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
