import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { RestauranteService } from '../restaurante.service';

import { Pedido } from 'src/shared/pedido.model';
import { Restaurante } from 'src/shared/restaurante.model';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.scss'],
  providers: [ PedidoService, RestauranteService ]
})
export class MeusPedidosComponent implements OnInit {

  public pedidos: Pedido[]
  public restaurantes: Restaurante
  
  public dadosPedidos = [
    { pedido: '12', restaurante: 'Hangar', src: 'https://picsum.photos/200/200', data: '28/04/2022', valor: '7.00' },
    { pedido: '15', restaurante: 'Da Tia', src: 'https://picsum.photos/200/200', data: '29/04/2022', valor: '12.00' },
  ];
  

  constructor(
    private pedidoService: PedidoService,
    private restauranteService: RestauranteService
  ) { }

  async ngOnInit() {

    this.restauranteService.getAllRestaurantes()
      .subscribe((restaurantes: any) => { this.restaurantes = restaurantes })

    this.pedidoService.getPedidosUsuario(1)
      .subscribe((pedidos: any) => { this.pedidos = pedidos })
  }

}
