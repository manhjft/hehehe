import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ObjectsPage from "./pages/ObjectsPage";
import SubjectsPage from "./pages/SubjectsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <nav className="bg-gray-200 p-4 flex gap-4 justify-center">
        <Link to="/objects" className="text-blue-600">Objects</Link>
        <Link to="/subjects" className="text-blue-600">Subjects</Link>
      </nav>
      <Routes>
        <Route path="/objects" element={<ObjectsPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
