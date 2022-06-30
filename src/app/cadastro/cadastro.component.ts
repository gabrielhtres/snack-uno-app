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

  public formularioCadastro: FormGroup = new FormGroup({
    'name': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'email': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'data_birth': new FormControl(null, [ Validators.required, Validators.minLength(1) ] ),
    'password': new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ),
    'cpf': new FormControl(null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] ),
    'telephone': new FormControl(null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] )
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

}
