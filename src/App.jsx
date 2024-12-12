import "./App.css";
import { Login } from "../src/pages/login";
import { Home } from "../src/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../src/components/protected"; // Importe o ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para login (não protegida) */}
        <Route path="/" element={<Login />} />

        {/* Rota protegida para home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home /> {/* Apenas acessível se o usuário estiver logado */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
