import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyJournal from "./pages/MyJournal";
import AddEntry from "./pages/AddEntry";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Footer from "./pages/Footer";
import EditEntry from "./pages/EditEntry";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-journal" element={<MyJournal />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/edit-entry/:id" element={<EditEntry />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
