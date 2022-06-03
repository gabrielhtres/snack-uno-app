import { HttpClient } from "@angular/common/http";
import { Observable, Subscriber } from "rxjs";
import { map, retry } from "rxjs/operators";
import { URL_API } from "src/app.api";
import { Cesta } from "src/shared/cesta.model";
import { ProdutoPedido } from "src/shared/produto-pedido.model";

export class CestaService {

    public cesta: Cesta = new Cesta(1, [], 0, 0)
    public quantidadeTotal: number

    constructor() {}

    public limparCesta(): void {
        this.cesta.produtos = []
        this.quantidadeTotal = 0
    }
    
    public adicionarProduto(produtoPedido: ProdutoPedido): void {
        this.cesta.produtos.push(produtoPedido)
        this.cesta.quantidadeTotal += 1
    }
    
}