import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioProduto from "./components/produtos/formularioProduto/formularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/criarProduto/" element={<FormularioProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
