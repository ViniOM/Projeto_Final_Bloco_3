import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProdutos/CardProdutos";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  async function listarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
      console.log(produtos)
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
      <div className="">
        <div className="flex justify-center m-10  ">
          <Link
            to={"/criarProduto/"}
            className="content-center text-center bg-green-600 p-3 rounded-3xl w-60 text-white hover:bg-green-800"
          >
            Cadastrar novo produto
          </Link>
        </div>
        {produtos.length === 0 && (
          <div className="flex justify-center ">
            <Triangle
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} props={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
