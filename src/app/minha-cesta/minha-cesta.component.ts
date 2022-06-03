import { Component, OnInit } from '@angular/core';
import { ProdutoPedido } from 'src/shared/produto-pedido.model';
import { Produto } from 'src/shared/produto.model';
import { CestaService } from '../cesta.service';
import { ProdutosService } from '../produtos.service';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-minha-cesta',
  templateUrl: './minha-cesta.component.html',
  styleUrls: ['./minha-cesta.component.scss']
})
export class MinhaCestaComponent implements OnInit {

  public produtosCesta: ProdutoPedido[]

  constructor(
    private cestaService: CestaService
    ) { }

  public finalizarCompra(): void {
    console.log('Compra finalizada')
    this.cestaService.limparCesta()
  }

  ngOnInit() {
    this.produtosCesta = this.cestaService.cesta.produtos
    
    console.log(this.produtosCesta)
  }

}
