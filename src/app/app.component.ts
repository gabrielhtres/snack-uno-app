import { Component } from '@angular/core';
import { Cesta } from '../shared/cesta.model';
import { CestaService } from './cesta.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ CestaService ]
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home/home', icon: 'home' },
    { title: 'Meu Perfil', url: '/folder/meu-perfil/meu-perfil', icon: 'person' },
    { title: 'Minha Cesta', url: '/folder/minha-cesta/minha-cesta', icon: 'bag'},
    { title: 'Meus Pedidos', url: '/folder/meus-pedidos/meus-pedidos', icon: 'receipt' },
    { title: 'Meus Cartões', url: '/folder/meus-cartoes/meus-cartoes', icon: 'card' },
    { title: 'Meus Locais', url: '/folder/meus-locais/meus-locais', icon: 'location' },
    { title: 'Configurações', url: '/folder/configuracoes/configuracoes', icon: 'construct' },
  ];

  constructor(private cesta: CestaService) {}
}
