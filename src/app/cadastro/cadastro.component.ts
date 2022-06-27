import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  public formularioCadastro: FormGroup = new FormGroup({
    'nome': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'email': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ),
    'dataNascimento': new FormControl(null, [ Validators.required, Validators.minLength(1) ] ),
    'senha': new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ),
    'cpf': new FormControl(null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] ),
    'telefone': new FormControl(null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ] )
  })

  constructor() { }

  ngOnInit() {}

}
