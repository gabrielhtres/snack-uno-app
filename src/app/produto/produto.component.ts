import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/shared/produto.model';
import { AlertQuantidade } from 'src/shared/quantidade.alert';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ AlertQuantidade, ProdutosService ]
})
export class ProdutoComponent implements OnInit, OnDestroy {
  public menu: any = ['Item 1', 'Item 2']
  public id: string = ''
  public restaurante: string = ''
  public Produto: any = {  }
  public iconeEntrega: string = 'caret-down'
  public iconePagamento: string = 'caret-down'
  public iconeHorario: string = 'caret-down'
  public listaEntrega: boolean = false
  public listaPagamento: boolean = false
  public listaHorario: boolean = false
  public quantidade: number = 0

  public produto: Produto = new Produto()

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
    private alertQuantidade: AlertQuantidade,
    private produtoService: ProdutosService
    ) { }

  public async adicionarACesta() {
    console.log(`Produto ${this.Produto.id} recebido`)
    this.quantidade = await this.alertQuantidade.presentAlert()
    console.log(this.quantidade)
  }

  ngOnInit() {

    this.id = this.rotaAtiva.snapshot.params.id
    this.restaurante = this.rotaAtiva.snapshot.params.restaurante

    this.produtoService.getProduto()
    
    this.produtoService.getProdutoIdRestaurante(this.id, this.restaurante)
      .subscribe((dado: any) => this.produto = dado[0])

  }

  ngOnDestroy(): void {
    this.produto = new Produto()
  }

}
