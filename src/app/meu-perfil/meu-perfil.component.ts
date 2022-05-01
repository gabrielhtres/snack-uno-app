import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss'],
})
export class MeuPerfilComponent implements OnInit {
  public dadosPerfil = [
    { titulo: 'Nome', dado: 'Gabriel', icon: 'person' },
    { titulo: 'E-mail', dado: 'gabriel@gabriel.com', icon: 'mail' },
    { titulo: 'Celular', dado: '(49) 99999-9999', icon: 'call' },
    { titulo: 'CPF', dado: '***.***.***-**', icon: 'card' },
    { titulo: 'Data de Nascimento', dado: '19/09/2000', icon: 'calendar' }
  ];

  constructor() { }

  ngOnInit() {}

}
