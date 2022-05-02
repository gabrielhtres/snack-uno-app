import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home/home', icon: 'home' },
    { title: 'Meu Perfil', url: '/folder/meu-perfil/meu-perfil', icon: 'person' },
    { title: 'Minha Cesta', url: '/folder/minha-cesta/minha-cesta', icon: 'basket'},
    { title: 'Meus Pedidos', url: '/folder/meus-pedidos/meus-pedidos', icon: 'basket' },
    { title: 'Meus Cartões', url: '/folder/meus-cartoes/meus-cartoes', icon: 'card' },
    { title: 'Meus Locais', url: '/folder/meus-locais/meus-locais', icon: 'location' },
    { title: 'Configurações', url: '/folder/configuracoes/configuracoes', icon: 'construct' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
