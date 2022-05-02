import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-cartoes',
  templateUrl: './meus-cartoes.component.html',
  styleUrls: ['./meus-cartoes.component.scss'],
})
export class MeusCartoesComponent implements OnInit {
  public dadosCartoes = [
    { titulo: 'Cartão 1', cartao: '**** **** **** 1234', icon: 'card' },
    { titulo: 'Cartão 2', cartao: '**** **** **** 9876', icon: 'card' }
  ];

  constructor() { }

  ngOnInit() {}

}
