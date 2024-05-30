import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { Produto } from "../../../models/Produto";
import { Triangle } from "react-loader-spinner";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      alert("erro");
      console.log(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`);

      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o produto");
    }

    retornar();
  }

  return (
    <div className="flex justify-center items-center mt-36">
      <div className="container w-1/3 mx-auto">
        {!produto.nome || !produto.preco ? (
          <div className="flex justify-center">
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
        ) : (
          <>
            <div className="border flex flex-col rounded-2xl overflow-hidden ">
              <p className="text-center font-semibold mb-4 bg-green-500 text-white py-2 px-6 ">
                Você tem certeza de que deseja apagar o seguinte produto?
              </p>
              <div className="w-full h-full flex justify-around  p-5">
                <div className="justify-center ">
                  <p className="text-2xl text-gray-700 font-semibold">
                    {produto.nome}
                  </p>
                  <p className="text-gray-700 text-base">R$ {produto.preco}</p>
                  <p className="text-gray-700 text-base">
                    {produto.categoria?.nome}
                  </p>
                </div>
                <img src={produto.foto} alt={produto.nome} className="w-1/5" />
              </div>
              <div className="flex">
                <button
                  className="text-slate-100 bg-red-500 hover:bg-red-600 w-full py-2 font-bold"
                  onClick={retornar}
                >
                  Não
                </button>
                <button
                  className="w-full text-slate-100 bg-green-600 hover:bg-green-700 flex items-center justify-center font-bold"
                  onClick={deletarProduto}
                >
                  Sim
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DeletarProduto;
