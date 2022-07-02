import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/shared/usuario.model';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  public valorAnt: string = ''
  public tipoInputSenha: string = 'password'
  public iconeInputSenha: string = 'eye'
  public cadastroUsuario: any = null

  public formularioCadastro: FormGroup = new FormGroup({
    'name': new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'email': new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'data_birth': new FormControl('', [ Validators.required, Validators.minLength(1) ] ),
    'password': new FormControl('', [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ),
    'cpf': new FormControl('', [ Validators.required, Validators.minLength(14), Validators.maxLength(14) ] ),
    'telephone': new FormControl('', [ Validators.required, Validators.minLength(15), Validators.maxLength(15) ] )
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {}

  public validarCadastro(): void {
    let usuario = new Usuario(
      this.formularioCadastro.value.name,
      this.formularioCadastro.value.cpf,
      this.formularioCadastro.value.data_birth,
      this.formularioCadastro.value.telephone,
      this.formularioCadastro.value.email += '@unochapeco.edu.br',
      this.formularioCadastro.value.password,
    )

    console.log(usuario)

    this.autenticacao.cadastrarUsuario(usuario)
      .subscribe((resp: any) => {
        if(resp.message = 201) {
          this.cadastroUsuario = true
        } else {
          this.cadastroUsuario = false
        }
      })
  }

  public mudarValor(evento: any, dado: string): void {
    switch(dado) {
      case 'cpf':
        if((evento.target.value.length == 3 && this.valorAnt.length != 4) ||
          (evento.target.value.length == 7 && this.valorAnt.length != 8)
        ) {
          evento.target.value += '.'
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 11 && this.valorAnt.length != 12) {
          evento.target.value += '-'
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 3 && this.valorAnt.length == 4) {
          evento.target.value = evento.target.value.substr(0, 2)
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 7 && this.valorAnt.length == 8) {
          evento.target.value = evento.target.value.substr(0, 6)
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 11 && this.valorAnt.length == 12) {
          evento.target.value = evento.target.value.substr(0, 10)
          this.valorAnt = evento.target.value
        }
        break;
      case 'telefone':
        if(evento.target.value.length == 1 && this.valorAnt.length == 0) {
          evento.target.value = '(' +  evento.target.value
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 1 && this.valorAnt.length != 0) {
          evento.target.value = ''
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 3 && this.valorAnt.length != 5) {
          evento.target.value += ') '
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 10 && this.valorAnt.length != 11) {
          evento.target.value += '-'
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 4 && this.valorAnt.length == 5) {
          console.log('VSF')
          evento.target.value = evento.target.value.substr(0, 2)
          this.valorAnt = evento.target.value
        } else if(evento.target.value.length == 10 && this.valorAnt.length == 11) {
          console.log('Entrou aqui')
          evento.target.value = evento.target.value.substr(0, 9)
          this.valorAnt = evento.target.value
        }
        break;
      case 'senha':
        if(this.tipoInputSenha == 'password') {
          this.tipoInputSenha = 'text'
          this.iconeInputSenha = 'eye-off'
        } else {
          this.tipoInputSenha = 'password'
          this.iconeInputSenha = 'eye'
        }
        break;
    
    console.log(evento)
    // console.log(evento.target.value += '.')
    }

  }

}
