import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./sections/header/header";
import Home from "./pages/home";
import Empresa from "./pages/empresa";
import Footer from "./sections/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
