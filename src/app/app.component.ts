import { Component, OnInit } from '@angular/core';
import { CestaService } from './cesta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/folder/home/home', icon: 'home' },
    { title: 'Meus Favoritos', url: '/folder/favoritos/favoritos', icon: 'heart' },
    { title: 'Meu Perfil', url: '/folder/meu-perfil/meu-perfil', icon: 'person' },
    { title: 'Minha Cesta', url: '/folder/minha-cesta/minha-cesta', icon: 'bag'},
    { title: 'Meus Pedidos', url: '/folder/meus-pedidos/meus-pedidos', icon: 'receipt' },
    { title: 'Meus Cartões', url: '/folder/meus-cartoes/meus-cartoes', icon: 'card' },
    { title: 'Meus Locais', url: '/folder/meus-locais/meus-locais', icon: 'location' },
    { title: 'Ajuda', url: '/folder/configuracoes/configuracoes', icon: 'help-circle' },
  ];

  constructor(private cestaService: CestaService) {}

  ngOnInit() {
    
  }
}
