import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./assets/pages/Goods";
import Add from "./assets/pages/Add";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import Edit from "./assets/pages/Edit";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;
