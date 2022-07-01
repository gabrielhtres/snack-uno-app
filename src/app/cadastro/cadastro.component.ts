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

  public formularioCadastro: FormGroup = new FormGroup({
    'name': new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'email': new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'data_birth': new FormControl('', [ Validators.required, Validators.minLength(1) ] ),
    'password': new FormControl('', [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ),
    'cpf': new FormControl('', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] ),
    'telephone': new FormControl('', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] )
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {}

  public validarCadastro(): void {
    let usuario = new Usuario(
      this.formularioCadastro.value.name,
      this.formularioCadastro.value.cpf,
      this.formularioCadastro.value.data_birth,
      this.formularioCadastro.value.telephone,
      this.formularioCadastro.value.email,
      this.formularioCadastro.value.password,
    )

    this.autenticacao.cadastrarUsuario(usuario)
      .subscribe((resp: any) => {
        console.log(resp)
      })
  }

  public mudarValor(evento: any): void {
    if((evento.target.value.length == 3 && this.valorAnt.length != 4) ||
       (evento.target.value.length == 7 && this.valorAnt.length != 8)
    ) {
      evento.target.value += '.'
      this.valorAnt = evento.target.value
    } else if((evento.target.value.length == 11 && this.valorAnt.length != 12)) {
      evento.target.value += '-'
      this.valorAnt = evento.target.value
    } else if(evento.target.value.length == 3 && this.valorAnt.length == 4) {
      evento.target.value = evento.target.value.substr(0, 2)
      this.valorAnt = evento.target.value
    } else if(evento.target.value.length == 7 && this.valorAnt.length == 8) {
      evento.target.value = evento.target.value.substr(0, 6)
      this.valorAnt = evento.target.value
    } else if(evento.target.value.length == 11 && this.valorAnt.length == 12) {
      evento.target.value = evento.target.value.substr(0,10)
      this.valorAnt = evento.target.value
    }
    console.log(evento)
    // console.log(evento.target.value += '.')
  }

}
