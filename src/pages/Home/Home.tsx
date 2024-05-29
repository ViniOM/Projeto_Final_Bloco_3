import FarmaciaFeliz from "../../assets/farmaciaFeliz.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-between h-screen">
      <div className="flex-1 flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${FarmaciaFeliz})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

        <div className="relative z-10 bg-white bg-opacity-65 p-8 rounded-lg mb-20">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            Bem-vindo à nossa {"< "}Farmácia!{" />"}
          </h1>
          <p className="text-md mb-4 text-gray-700 font-semibold">
            Aqui você encontra os melhores produtos e serviços para a sua saúde.
          </p>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 font-semibold"
            onClick={() => navigate("/produtos")}
          >
            Confira nossos produtos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
