import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/shared/cartao.model';
import { Autenticacao } from '../autenticacao.service';
import { CartaoService } from '../cartao.service';

@Component({
  selector: 'app-meus-locais',
  templateUrl: './meus-locais.component.html',
  styleUrls: ['./meus-locais.component.scss'],
  providers: [ CartaoService ]
})
export class MeusLocaisComponent implements OnInit {

  public locais: any[]

  constructor(private cartaoService: CartaoService, private autenticacao: Autenticacao) { }

  ngOnInit() {
    this.cartaoService.getAllLocais(this.autenticacao.usuarioAtivo.id)
      .subscribe((resp: any) => {
        console.log(resp)
        this.locais = resp
      })
  }

}
