import { Produto } from "./Produto";

export interface Categoria {
  id: number;
  nome: string;
  produto: Produto;
}
