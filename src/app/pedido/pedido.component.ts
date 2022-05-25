import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
  providers: [ PedidoService ]
})
export class PedidoComponent implements OnInit {

  public idPedido: any
  public pedido: any = undefined
  public deu = true
  public valor = 5

  constructor(
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (parametros: any) => {
        console.log(parametros.id)
        this.pedidoService.getPedidoId(parametros.id)
        .subscribe((pedido: any) => { this.pedido = pedido[0] })
      })

    // this.pedidoService.getPedidoId(this.idPedido)
    //   .subscribe((pedido: any) => { this.pedido = pedido[0] })

  }

}
