import './App.css';
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
