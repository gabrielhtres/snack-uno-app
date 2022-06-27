import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertQuantidade } from 'src/shared/quantidade.alert';
import { ProdutosService } from '../produtos.service';

import { Produto } from 'src/shared/produto.model';
import { RestauranteService } from '../restaurante.service';
import { Cesta } from 'src/shared/cesta.model';
import { CestaService } from '../cesta.service';
import { ProdutoPedido } from 'src/shared/produto-pedido.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ AlertQuantidade, ProdutosService, RestauranteService ]
})
export class ProdutoComponent implements OnInit, OnDestroy {

  public formularioProduto: FormGroup = new FormGroup({
    'saborForm': new FormControl(null),
    'quantidadeForm': new FormControl(null)
  })

  public produto: Produto
  public id: number
  public adicionarCesta: boolean = true
  
  public iconeEntrega: string = 'caret-down'
  public iconePagamento: string = 'caret-down'
  public iconeHorario: string = 'caret-down'
  public listaEntrega: boolean = false
  public listaPagamento: boolean = false
  public listaHorario: boolean = false

  public quantidadeProduto: number
  public saborProduto: string

  public abrirMenu(nomeMenu: string): void {
    if (nomeMenu === 'entrega') {
      if (this.listaEntrega === false) {
        this.listaEntrega = true
        this.iconeEntrega = 'caret-back'
      } else {
        this.listaEntrega = false
        this.iconeEntrega = 'caret-down'
      }
    } else if (nomeMenu === 'horario') {
      if (this.listaHorario === false) {
        this.listaHorario = true
        this.iconeHorario = 'caret-back'
      } else {
        this.listaHorario = false
        this.iconeHorario = 'caret-down'
      }
    } else if (nomeMenu === 'pagamento') {
      if (this.listaPagamento === false) {
        this.listaPagamento = true
        this.iconePagamento = 'caret-back'
      } else {
        this.listaPagamento = false
        this.iconePagamento = 'caret-down'
      }
    }
  }

  constructor(
    private rotaAtiva: ActivatedRoute,
    private produtoService: ProdutosService,
    private restauranteService: RestauranteService,
    private cestaService: CestaService
    ) { }

  public abrirAdicionar(): void {
    this.adicionarCesta = false
  }

  public adicionarACesta() {
    let produtoPedido: ProdutoPedido = new ProdutoPedido(this.produto, this.formularioProduto.value.saborForm, this.formularioProduto.value.quantidadeForm)
    this.cestaService.adicionarProduto(produtoPedido)
  }

  ngOnInit() {

    this.id = this.rotaAtiva.snapshot.params.id

    // this.produtoService.getProduto()
    
    this.produtoService.getProdutoPorId(this.id)
      .subscribe((dado: any) => {
        console.log(dado)
        this.produto = dado[0]
        console.log(this.produto.restaurante)
        this.restauranteService.getRestaurantePorId(this.produto.restaurante)
          .subscribe((restaurante: any) => { this.produto.restaurante = (restaurante[0].nome) })
      })

  }

  ngOnDestroy(): void {
    this.produto = new Produto()
  }

}
