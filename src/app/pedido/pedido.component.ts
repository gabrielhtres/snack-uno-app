import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { RestauranteService } from '../restaurante.service';

import { Pedido } from 'src/shared/pedido.model';
import { Restaurante } from 'src/shared/restaurante.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
  providers: [ PedidoService, RestauranteService ]
})
export class PedidoComponent implements OnInit {

  public idPedido: any
  public pedido: Pedido
  public restaurantes: Restaurante[]

  constructor(
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute,
    private restauranteService: RestauranteService
  ) { }

  ngOnInit() {

    this.restauranteService.getAllRestaurantes()
      .subscribe((restaurantes: any) => { this.restaurantes = restaurantes })

    this.activatedRoute.params.subscribe(
      (parametros: any) => {
        // console.log(parametros.id)
        this.pedidoService.getPedidoId(parametros.id)
        .subscribe((pedido: any) => { this.pedido = pedido[0] })
      })

      // console.log(this.pedido)

    // this.pedidoService.getPedidoId(this.idPedido)
    //   .subscribe((pedido: any) => { this.pedido = pedido[0] })

  }

}
