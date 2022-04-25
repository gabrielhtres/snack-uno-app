import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Meu Perfil', url: '/folder/meu-perfil', icon: 'person' },
    { title: 'Meus Pedidos', url: '/folder/meus-pedidos', icon: 'basket' },
    { title: 'Meus Cartões', url: '/folder/meus-cartoes', icon: 'card' },
    { title: 'Meus Locais', url: '/folder/meus-locais', icon: 'location' },
    { title: 'Configurações', url: '/folder/configuracoes', icon: 'construct' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
