import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
