import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./assets/pages/Goods";
import Add from "./assets/pages/Add";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import Edit from "./assets/pages/Edit";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState({});

  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Goods name={name} />} />
        <Route path="/add" element={<Add name={name} setName={setName} />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;
