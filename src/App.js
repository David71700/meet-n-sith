import { Routes, Route } from "react-router-dom";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
