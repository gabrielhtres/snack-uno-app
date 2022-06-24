import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null),
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {}

  public validarLogin(): void {
    this.autenticacao.validarLogin()
  }

}
