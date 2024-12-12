import "./App.css";
import { Login } from "../src/pages/login";
import { Home } from "../src/pages/home";
import { NotFound } from "../src/pages/notfound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../src/components/protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
