import { Produto } from "../../../models/Produto";

interface PropsProduto {
  props: Produto;
}

function ModalProduto({ props }: PropsProduto) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{props.nome}</h2>
        <img
          src={props.foto}
          alt={props.nome}
          className="w-full mb-4 rounded-lg"
        />
        <p className="text-gray-700 mb-4">{props.nome}</p>
        <p className="text-gray-700 mb-4">Preço: R$ {props.preco}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ModalProduto;
