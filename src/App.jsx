import { Route, Routes, BrowserRouter } from "react-router-dom";
import CardApi from "./component/Card";
import "./App.css";
import DinamiCard from "./component/DinamiCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardApi />} />
          <Route path="/params/:id" element={<DinamiCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
