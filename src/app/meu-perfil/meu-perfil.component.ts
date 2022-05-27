import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/shared/usuario.model';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss'],
})
export class MeuPerfilComponent implements OnInit, OnDestroy {

  public listaEditar: boolean = false

  public usuario: Usuario = new Usuario('Gabriel', 'gabrielhtres@gmail.com', '(49) 98504-7645', '111.222.333-44', '19/09/2000')
  
  public listaEditarNome: boolean = false
  public listaEditarEmail: boolean = false
  public listaEditarCelular: boolean = false
  public listaEditarCPF: boolean = false
  public listaEditarNascimento: boolean = false
  
  public valorInputNome: string
  public valorInputEmail: string
  public valorInputCelular: string
  public valorInputNascimento: string

  public dadosPerfil = [
    { titulo: 'Nome', dado: this.usuario.nome, icon: 'person' },
    { titulo: 'E-mail', dado: this.usuario.email, icon: 'mail' },
    { titulo: 'Celular', dado: this.usuario.celular, icon: 'call' },
    { titulo: 'CPF', dado: this.usuario.cpf, icon: 'card' },
    { titulo: 'Data de Nascimento', dado: this.usuario.dataNascimento, icon: 'calendar' }
  ];

  public abreEditar(dadoEditar: string): void {
    switch(dadoEditar) {
      case 'nome':
        this.listaEditarNome = true

        break
      case 'e-mail':
        this.listaEditarEmail = true
        break
      case 'celular':
        this.listaEditarCelular = true
        break
      case 'nascimento':
        this.listaEditarNascimento = true
        break
      default:
        break
    }
  }

  public editaValor(campo: string): void {
    switch(campo) {
      case 'nome':
        this.usuario[campo] = this.valorInputNome
        this.listaEditarNome = false
        console.log(this.usuario)
        console.log(this.valorInputNome)
        break
      case 'email':
        this.usuario[campo] = this.valorInputEmail
        this.listaEditarEmail = false
        console.log(this.usuario)
        console.log(this.valorInputEmail)
        break
      case 'celular':
        this.usuario[campo] = this.valorInputCelular
        this.listaEditarCelular= false
        console.log(this.usuario)
        console.log(this.valorInputCelular)
        break
      case 'dataNascimento':
        this.usuario[campo] = this.valorInputNascimento
        this.listaEditarNascimento = false
        console.log(this.usuario)
        console.log(this.valorInputNascimento)
        break
      default:
        break
    }
  }

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.listaEditarNome = false
    this.listaEditarEmail = false
    this.listaEditarCelular = false
    this.listaEditarNascimento = false
  }

}
