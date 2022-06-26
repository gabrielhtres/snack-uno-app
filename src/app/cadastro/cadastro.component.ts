import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  public formularioCadastro: FormGroup = new FormGroup({
    'nome': new FormControl(null),
    'email': new FormControl(null),
    'dataNascimento': new FormControl(null),
    'senha': new FormControl(null),
    'cpf': new FormControl(null),
    'telefone': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {}

}
