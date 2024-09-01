import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./sections/header/header";
import Home from "./pages/homePage";
import Empresa from "./pages/empresaPage";
import Footer from "./sections/footer/footer";
import Blog from "./pages/blogPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Empresa" element={<Empresa />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
