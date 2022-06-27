import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { map, retry } from "rxjs/operators";
import { URL_API } from "src/app.api";
import { Cesta } from "src/shared/cesta.model";
import { ProdutoPedido } from "src/shared/produto-pedido.model";
import { Autenticacao } from "./autenticacao.service";

@Injectable()
export class CestaService {

    public cesta: Cesta = new Cesta(1, [], 0, 0)
    public quantidadeTotal: number = 0

    public limparCesta(): void {
        this.cesta.produtos = []
        this.cesta.quantidadeTotal = 0
        this.cesta.valorTotal = 0
    }
    
    public adicionarProduto(produtoPedido: ProdutoPedido): void {
        produtoPedido.produto.preco = produtoPedido.produto.preco * produtoPedido.quantidade
        this.cesta.produtos.push(produtoPedido)
        this.cesta.quantidadeTotal += 1
    }
    
}