import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertsPagamento } from 'src/shared/pagamentos.alert';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
  providers: [ AlertsPagamento ]
})
export class PagamentoComponent implements OnInit {

  public tipoPagamento: string = ''
  public tipoEntrega: string = ''
  public observacoes: string = ''
  public formulario: any
  public tipoPagamentoTemplate: string = ''

  public teste = {
    pix: 'Pix',
    credito: 'Cartão de Crédito',
    debito: 'Cartão de Débito'
  }
  
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

  constructor(private alertsPagamento: AlertsPagamento) { }

  public async validarPagamento() {
    this.tipoPagamento = await this.alertsPagamento.presentAlertFormaPagamento()
    this.tipoPagamentoTemplate = this.teste[this.tipoPagamento]
  }

  ngOnInit() {}

}
