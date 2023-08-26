import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/HomePage";
import GetCertificates from "./components/pages/GetCertificates";
import IssueCertificates from "./components/pages/IssueCertificates";
import RevokeCertificate from "./components/pages/RevokeCertificate";
import ShareCertificate from "./components/pages/ShareCertificate";
import PendingVerify from "./components/pages/PendingVerify";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get" element={<GetCertificates />} />
          <Route path="/issue" element={<IssueCertificates />} />
          <Route path="/revoke" element={<RevokeCertificate />} />
          <Route path="/share/:address?" element={<ShareCertificate />} />
          <Route path="/pending" element={<PendingVerify />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
