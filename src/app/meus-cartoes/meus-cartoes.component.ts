import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Cartao } from 'src/shared/cartao.model';
import { AlertEdicao } from 'src/shared/edicao.alert';
import { AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-meus-cartoes',
  templateUrl: './meus-cartoes.component.html',
  styleUrls: ['./meus-cartoes.component.scss'],
  providers: [ CartaoService, AlertEdicao ]
})
export class MeusCartoesComponent implements OnInit {

  public cartoes: Cartao[]
  public cartaoEditar: Cartao
  public alertInputs: AlertInput[] = [
    {
      type: "text",
      placeholder: 'Nome Cartão',
      min: '0'
    },
    {
      type: "number",
      placeholder: 'Número Cartão ',
      min: '16'
    }
  ]

  constructor(
    private cartaoService: CartaoService,
    private alertEditar: AlertEdicao
  ) { }

  public async abrirAlertEditarCartao() {
      this.cartaoEditar =  await this.alertEditar.presentAlertEditar(this.alertInputs)
      console.log(this.cartaoEditar)
  }

  ngOnInit() {

    this.cartaoService.getAllCartoes(1)
      .subscribe((dado: any) => { this.cartoes = dado })
  }

}