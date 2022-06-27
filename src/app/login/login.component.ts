import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public request = undefined
  public mensagemErroLogin: boolean = false

  public formularioLogin: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null),
  })

  constructor(private autenticacao: Autenticacao, private routes: Router) { }

  ngOnInit() {}

  public validarLogin(): void {
    this.autenticacao.validarLogin(this.formularioLogin.value.email, this.formularioLogin.value.senha)
      // .then((resp: any) => {
      //   console.log(resp)
      //   this.routes.navigate(['/folder/home/home'])
      // })
      // .catch((erro: Error) => {
      //   this.request = erro.message
      // })
      .subscribe((resp: any) => {
        this.routes.navigate(['/folder/home/home'])
      },
      (erro: any) => {
        this.mensagemErroLogin = true
        console.log(erro)
      })
  }

}
