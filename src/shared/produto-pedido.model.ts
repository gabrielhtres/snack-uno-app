import { Produto } from "./produto.model";

export class ProdutoPedido {

    constructor(
        public produto: Produto,
        public sabor: string,
        public quantidade: number
    ) {}
    
}