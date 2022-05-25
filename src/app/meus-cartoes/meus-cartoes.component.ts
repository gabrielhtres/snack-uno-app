import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Cartao } from 'src/shared/cartao.model';

@Component({
  selector: 'app-meus-cartoes',
  templateUrl: './meus-cartoes.component.html',
  styleUrls: ['./meus-cartoes.component.scss'],
  providers: [ CartaoService ]
})
export class MeusCartoesComponent implements OnInit {

  public cartoes: any = ''
  public dadosCartoes = [
    { titulo: 'Cartão 1', cartao: '**** **** **** 1234', icon: 'card' },
    { titulo: 'Cartão 2', cartao: '**** **** **** 9876', icon: 'card' }
  ];

  constructor(
    private cartaoService: CartaoService
  ) { }

  async ngOnInit() {

    console.log(this.cartaoService.getAllCartoes(1)
      .subscribe((dado: any) => this.cartoes = dado))
      ._next()
    
    console.log(this.cartoes)
  } 

}
