import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
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

  public Produtos = [
      { id: '1', img: '../../assets/pizza.jpg', restaurante: 'Hangar', produto: 'Pizza', descricao: 'Pizza de Calabresa', preco: 'R$ 5.00' },
      { id: '2', img: '../../assets/pastel.webp', restaurante: 'Hangar', produto: 'Pastel', descricao: 'Pastel de Frango', preco: 'R$ 4.00' },
      { id: '3', img: '../../assets/cafe.jpg', restaurante: 'Hangar', produto: 'Café', descricao: 'Café Preto com Açúcar', preco: 'R$ 3.00' },
      { id: '1', img: '../../assets/pizza.jpg', restaurante: 'Da Tia', produto: 'Pizza', descricao: 'Pizza de Calabresa', preco: 'R$ 5.00' },
      { id: '2', img: '../../assets/pastel.webp', restaurante: 'Da Tia', produto: 'Pastel', descricao: 'Pastel de Frango', preco: 'R$ 4.00' },
      { id: '3', img: '../../assets/cafe.jpg', restaurante: 'Da Tia', produto: 'Café', descricao: 'Café Preto com Açúcar', preco: 'R$ 3.00' }  
  ];

  public getProduto(): any {
    for(let i = 0; i < this.Produtos.length; i++) {
      if (this.Produtos[i].id == this.id && this.Produtos[i].restaurante == this.restaurante) {
        this.Produto = this.Produtos[i]
      }
    }
  }

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

  public adicionarACesta(): void {
    console.log(`Produto ${this.Produto.id} recebido`)
  }

  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.rotaAtiva.snapshot.params.id
    this.restaurante = this.rotaAtiva.snapshot.params.restaurante

    this.getProduto()

  }

}
