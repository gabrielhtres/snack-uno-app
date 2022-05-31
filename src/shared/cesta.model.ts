import { ProdutoPedido } from "./produto-pedido.model"

export class Cesta {
    
    constructor(
        public idUsuario: number,
        public produtos: ProdutoPedido[],
        public quantidadeTotal: number,
        public valorTotal: number
    ) { }
}