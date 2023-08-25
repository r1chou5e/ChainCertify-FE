import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/HomePage";
import GetCertificates from "./components/pages/GetCertificates";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get" element={<GetCertificates />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
