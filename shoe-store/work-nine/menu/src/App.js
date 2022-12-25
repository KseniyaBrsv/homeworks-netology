import {Route, Routes} from 'react-router-dom';
import './App.css';
import {HomePage} from "./components/HomePage";
import {DriftPage} from "./components/DriftPage";
import {TimeAttackPage} from "./components/TimeAttackPage";
import {ForzaPage} from "./components/ForzaPage";
import {Layout} from "./pages/Layout";

export default function App() {
  return (
    <>
      <Layout />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
}
