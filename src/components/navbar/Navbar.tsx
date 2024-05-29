import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-green-500 p-4">
      <div className="text-white text-2xl font-bold">
        <a href="/">Farmácia</a>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/home" className="text-white hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" className="text-white hover:underline">
            Produtos
          </a>
        </li>
        <li>
          <a href="/contato" className="text-white hover:underline">
            Contato
          </a>
        </li>
        <li>
          <a href="/sobre" className="text-white hover:underline">
            Sobre Nós
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
