import { Route, Routes, BrowserRouter } from 'react-router-dom'
import CardApi from './component/Card'
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardApi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
