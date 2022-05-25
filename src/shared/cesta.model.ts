import { Produto } from "./produto.model"

export class Cesta {
    public idUsuario: number
    public produtos: Produto[]
    public quantidadeTotal: number
    public valorTotal: number

    constructor() { }
}