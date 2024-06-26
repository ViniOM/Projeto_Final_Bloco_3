import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { Link } from "react-router-dom";

interface PropsProduto {
  props: Produto;
}

function CardProduto({ props }: PropsProduto) {
  console.log(props);
  const [mostrar, setMostrar] = useState(false);

  return (
    <div
      className="max-w-xs overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 m-8 relative rounded-3xl"
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={props.foto}
          alt={props.nome}
        />
        {mostrar && (
          <div className="absolute inset-0 bg-black opacity-50"></div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.nome}</div>
        <p className="text-gray-700 text-base">R$ {props.preco}</p>
        <p className="text-gray-700 text-base">{props.categoria?.nome}</p>
      </div>
      <div
        className={`transition-opacity duration-300 ${
          mostrar ? "opacity-100" : "opacity-0"
        } absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
      >
        <Link to={`/editarProduto/${props.id}`}>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Editar
          </button>
        </Link>

        <Link to={`/deletarProduto/${props.id}`}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Apagar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
