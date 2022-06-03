import { Routes, Route } from "react-router-dom";
import Characters from "./screens/Characters";
import DisplayChara from "./screens/DisplayChara";
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
        <Route path="/page2" element={<Characters />} />
        <Route path="/page2/:id" element={<DisplayChara />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
