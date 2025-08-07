import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css"
import Home from "./components/home"
import Header from "./components/header"

import Page2 from "./components/pages/page-2"
import Page3 from "./components/pages/page-3"
import Page4 from "./components/pages/page-4"

function App() {
  return (
    <div className="main-container">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-2" element={<Page2 />}/>
        <Route path="/page-3" element={<Page3 />}/>
        <Route path="/page-4" element={<Page4 />}/>
      </Routes>
    </div>
  );
}

export default App;
