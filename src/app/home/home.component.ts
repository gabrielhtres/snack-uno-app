import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  public abrirPesquisa(): void {
    console.log('Pesquisa')
  }

  public abrirFiltro(): void {
    console.log('Filtro')
  }

  ngOnInit() {}

}
