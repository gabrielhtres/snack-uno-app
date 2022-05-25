import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';

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

  constructor(
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idPedido = this.activatedRoute.snapshot.paramMap.get('id');

    this.pedidoService.getPedidoId(this.idPedido)
      .subscribe((pedido: any) => { this.pedido = pedido[0] })

  }

}
