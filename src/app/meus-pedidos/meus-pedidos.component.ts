import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.scss'],
})
export class MeusPedidosComponent implements OnInit {
  public dadosPedidos = [
    { pedido: '#12', restaurante: 'Hangar', src: 'https://picsum.photos/200/200', data: '28/04/2022', valor: '7.00' },
    { pedido: '#15', restaurante: 'Da Tia', src: 'https://picsum.photos/200/200', data: '29/04/2022', valor: '12.00' },
  ];
  

  constructor() { }

  ngOnInit() {}

}
