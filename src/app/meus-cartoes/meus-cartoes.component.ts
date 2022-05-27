import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Cartao } from 'src/shared/cartao.model';
import { AlertEdicao } from 'src/shared/edicao.alert';

@Component({
  selector: 'app-meus-cartoes',
  templateUrl: './meus-cartoes.component.html',
  styleUrls: ['./meus-cartoes.component.scss'],
  providers: [ CartaoService, AlertEdicao ]
})
export class MeusCartoesComponent implements OnInit {

  public cartoes: Cartao[]
  public cartaoEditar: Cartao

  public inputsCartao: boolean = false
  public controladoresInputs: Array<boolean> = []

  public valoresInputNomeCartao: Array<any> = []
  public valoresInputNumeroCartao: Array<any> = []

  constructor(
    private cartaoService: CartaoService
  ) { }

  public geraControladores(): void {
    for(let i=0; i<this.cartoes.length; i++) {
      this.controladoresInputs[i] = false
      this.valoresInputNomeCartao[i] = ''
      this.valoresInputNumeroCartao[i] = ''
    }
  }

  public abreEditar(indice: number): void {
    this.controladoresInputs[indice] = true
  }

  public editaCartao(idCartao: number): void {
    for(let i=0; i<this.cartoes.length; i++) {
      if(this.cartoes[i].id === idCartao && this.valoresInputNomeCartao[i] !== undefined && this.valoresInputNumeroCartao[i] === undefined){
        this.cartoes[i].nomeCartao = this.valoresInputNomeCartao[i]
        this.controladoresInputs[i] = false
      } else if(this.cartoes[i].id === idCartao && this.valoresInputNomeCartao[i] === undefined && this.valoresInputNumeroCartao[i] !== undefined){
        this.cartoes[i].numeroCartao = this.valoresInputNumeroCartao[i]
        this.controladoresInputs[i] = false
      } else if(this.cartoes[i].id === idCartao && this.valoresInputNomeCartao[i] !== undefined && this.valoresInputNumeroCartao[i] !== undefined) {
        this.cartoes[i].nomeCartao = this.valoresInputNomeCartao[i]
        this.cartoes[i].numeroCartao = this.valoresInputNumeroCartao[i]
        this.controladoresInputs[i] = false
      }
    }
  }

  ngOnInit() {

    this.cartaoService.getAllCartoes(1)
      .subscribe((dado: any) => {
        this.cartoes = dado
        this.geraControladores()
      })
  }

}