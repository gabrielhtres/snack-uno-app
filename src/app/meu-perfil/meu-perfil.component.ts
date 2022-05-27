import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/shared/usuario.model';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss'],
})
export class MeuPerfilComponent implements OnInit {

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
        if(this.listaEditarNome === false) {
          this.listaEditarNome = true
        } else {
          this.listaEditarNome = false
        }
        break
      case 'e-mail':
        if(this.listaEditarEmail === false) {
          this.listaEditarEmail = true
        } else {
          this.listaEditarEmail = false
        }
        break
      case 'celular':
        if(this.listaEditarCelular === false) {
          this.listaEditarCelular = true
        } else {
          this.listaEditarCelular = false
        }
        break
      case 'nascimento':
        if(this.listaEditarNascimento === false) {
          this.listaEditarNascimento = true
        } else {
          this.listaEditarNascimento = false
        }
        break
      default:
        break
    }
  }

  public editaValor(campo: string): void {
    switch(campo) {
      case 'nome':
        this.usuario[campo] = this.valorInputNome
        console.log(this.usuario)
        console.log(this.valorInputNome)
        break
      case 'email':
        this.usuario[campo] = this.valorInputEmail
        console.log(this.usuario)
        console.log(this.valorInputEmail)
        break
      case 'celular':
        this.usuario[campo] = this.valorInputCelular
        console.log(this.usuario)
        console.log(this.valorInputCelular)
        break
      case 'dataNascimento':
        this.usuario[campo] = this.valorInputNascimento
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

}
