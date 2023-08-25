import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/HomePage";
import GetCertificates from "./components/pages/GetCertificates";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<GetCertificates />} />
      </Routes>
    </div>
  );
}

export default App;
