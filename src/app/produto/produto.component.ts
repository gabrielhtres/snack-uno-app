import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  public id: string = ''
  public restaurante: string = ''
  public Produto: any = {  }

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
      if (this.Produtos[i]. id == this.id && this.Produtos[i].restaurante == this.restaurante) {
        this.Produto = this.Produtos[i]
      }
    }
  }

  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.rotaAtiva.snapshot.params.id
    this.restaurante = this.rotaAtiva.snapshot.params.restaurante

    this.getProduto()

  }

}
