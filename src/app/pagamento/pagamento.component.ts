import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {

  public alertOptions = {
    cssClass: 'alertClass',
    header: 'Pagamento',
  }

  constructor() { }

  ngOnInit() {}

}
