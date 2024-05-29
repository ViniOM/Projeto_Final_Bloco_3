import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProdutos/CardProdutos";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function listarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (err) {
      alert("Erro ao buscar produtos");
      console.log("Erro ao buscar produtos: ", err);
    }
  }

  useEffect(() => {
    listarProdutos();
  }, [produtos.length]);

  return (
    <>
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} props={produto} />
        ))}
      </div>
    </div>
    </>
  );
}

export default ListaProdutos;
