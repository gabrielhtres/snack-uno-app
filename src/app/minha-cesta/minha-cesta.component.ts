import { Component, OnInit } from '@angular/core';
import { ProdutoPedido } from 'src/shared/produto-pedido.model';
import { Produto } from 'src/shared/produto.model';
import { CestaService } from '../cesta.service';

@Component({
  selector: 'app-minha-cesta',
  templateUrl: './minha-cesta.component.html',
  styleUrls: ['./minha-cesta.component.scss'],
})
export class MinhaCestaComponent implements OnInit {

  public produtosCesta: ProdutoPedido[]

  public dadosCesta = [
    { produto: 'Pizza', descricao: 'Pizza de Calabresa', valor: '5.00', restaurante: 'Hangar', quantidade: '1', src: 'https://picsum.photos/200/200' },
    { produto: 'Café', descricao: 'Café Preto Sem Açucar', valor: '3.00', restaurante: 'Da Tia', quantidade: '1', src: 'https://picsum.photos/200/200' }
  ];

  public dadosPedidos = [
    { pedido: '#12', restaurante: 'Hangar', src: 'https://picsum.photos/200/200', data: '28/04/2022', valor: '7.00' },
    { pedido: '#15', restaurante: 'Da Tia', src: 'https://picsum.photos/200/200', data: '29/04/2022', valor: '12.00' },
  ];

  constructor(private cestaService: CestaService) { }

  ngOnInit() {
    this.produtosCesta = this.cestaService.cesta.produtos
    console.log('Teste', this.produtosCesta)
  }

}
