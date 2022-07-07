import { Component, OnInit } from '@angular/core';
import { ProdutoPedido } from 'src/shared/produto-pedido.model';
import { Produto } from 'src/shared/produto.model';
import { CestaService } from '../cesta.service';
import { PedidoService } from '../pedido.service';
import { ProdutosService } from '../produtos.service';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-minha-cesta',
  templateUrl: './minha-cesta.component.html',
  styleUrls: ['./minha-cesta.component.scss'],
  providers: [ PedidoService ]
})
export class MinhaCestaComponent implements OnInit {

  public produtosCesta: ProdutoPedido[]

  constructor(
    private cestaService: CestaService,
    private pedidoService: PedidoService
    ) { }

  public indexArray(id: number) {
    for(let i=0;i<this.produtosCesta.length;i++) {
      if(this.produtosCesta[i].produto.id_product === id) {
        return i
      }
    }
    return undefined
  }

  public finalizarCompra(): void {
    this.pedidoService.cadastrarPedido(this.cestaService.cesta)
      .subscribe((resposta: any) => {
        console.log(resposta)
      }) 
    this.cestaService.limparCesta()
  }

  public removerItem(idProduto: number): void {
    this.produtosCesta.splice(this.indexArray(idProduto), 1)
    this.cestaService.cesta.quantidadeTotal -= 1
  }

  ngOnInit() {
    this.produtosCesta = this.cestaService.cesta.produtos
    // console.log(this.produtosCesta)
  }

}
