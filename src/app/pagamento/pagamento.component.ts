import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {

  public tipoPagamento: string = ''
  public tipoEntrega: string = ''
  public observacoes: string = ''
  public formulario: any
  
  public alertOptions = {
    cssClass: 'alertClass',
    header: 'Forma de Pagamento',
    mode: 'md'
  }

  public alertOptions2 = {
    cssClass: 'alertClass',
    header: 'Forma de Entrega',
    mode: 'md'
  }

  constructor() { }

  public validarPagamento(): void {
    console.log(this.formulario.pagamento)
  }

  ngOnInit() {}

}
