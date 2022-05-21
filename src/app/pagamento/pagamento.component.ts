import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsPagamento } from 'src/shared/pagamentos.alert';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
  providers: [ AlertsPagamento ]
})
export class PagamentoComponent implements OnInit {

  public tipoPagamento: string = ''
  public tipoPagamentoTemplate: string = ''
  public tipoEntrega: string = ''
  public tipoEntregaTemplate: string = ''
  public observacoes: string = ''
  public observacoesTemplate: string = ''

  public valoresInputs = {
    pix: 'Pix',
    credito: 'Cartão de Crédito',
    debito: 'Cartão de Débito',
    entrega: 'Entrega',
    retirada: 'Retirada'
  }

  public formularioPagamento: FormGroup = new FormGroup({
    'formaPagamento': new FormControl(null, [ Validators.required ]),
    'formaEntrega': new FormControl(null, [ Validators.required ]),
    'observacoes': new FormControl(null)
  })

  constructor(private alertsPagamento: AlertsPagamento) { }

  public async abrirAlertSelecao(input: string) {
    if (input === 'pagamento') {
      this.tipoPagamento = await this.alertsPagamento.presentAlertFormaPagamento()
      this.formularioPagamento.get('formaPagamento').setValue = this.valoresInputs[this.tipoPagamento]
      this.tipoPagamentoTemplate = this.valoresInputs[this.tipoPagamento]
    } else if (input === 'entrega') {
      this.tipoEntrega = await this.alertsPagamento.presentAlertFormaEntrega()
      console.log(this.tipoEntrega)
      this.formularioPagamento.get('formaEntrega').setValue = this.valoresInputs[this.tipoEntrega]
      this.tipoEntregaTemplate = this.valoresInputs[this.tipoEntrega]
    }
    
  }

  ngOnInit() {}

}
