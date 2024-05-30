import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";
import { Produto } from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    foto: "",
    nome: "",
    preco: 0,
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      buscar(`/categorias/${id}`, (categoria: Categoria) => {
        setCategoria(categoria);

        setProduto({
          ...produto,
          categoria: categoria,
        });
      });
    } catch (error) {
      console.log("Erro ao buscar categoria: ", error);
    }
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    try {
      if (id !== undefined) {
        await atualizar(`/produtos/`, produto, setProduto);
      } else {
        await cadastrar(`/produtos/`, produto, setProduto);
      }
      retornar();
    } catch (error: any) {
      alert("Erro ao salvar produto");
    }
  }

  const carregandoCategoria = categoria === null;

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8 font-semibold">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={atualizarEstado}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Link da Foto do Produto</label>
          <input
            value={produto.foto}
            onChange={atualizarEstado}
            type="text"
            placeholder="Link da Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do Produto</label>
          <input
            value={produto.preco}
            onChange={atualizarEstado}
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria do Produto</label>
          <select
            value={categoria?.id || ""}
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.target.value)}
          >
            <option value="" disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-green-600 hover:bg-green-700 text-white font-bold w-1/2 mx-auto block py-2 mb-5"
        >
          {carregandoCategoria
            ? "Carregando..."
            : id !== undefined
            ? "Editar"
            : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
