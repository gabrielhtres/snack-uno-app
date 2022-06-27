import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pagamento } from 'src/shared/pagamento.model';
import { AlertsPagamento } from 'src/shared/pagamentos.alert';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
  providers: [ AlertsPagamento, PedidoService ]
})
export class PagamentoComponent implements OnInit {

  public pagamento: Pagamento = new Pagamento()
  public tipoPagamentoTemplate: string = ''
  public tipoEntregaTemplate: string = ''
  public observacoesTemplate: string = ''

  public valoresInputs = {
    pix: 'Pix',
    credito: 'Cartão de Crédito',
    debito: 'Cartão de Débito',
    entrega: 'Entrega',
    retirada: 'Retirada',
    '': ''
  }

  public formularioPagamento: FormGroup = new FormGroup({
    'formaPagamento': new FormControl(null, [ Validators.required, Validators.minLength(1) ]),
    'formaEntrega': new FormControl(null, [ Validators.required, Validators.minLength(1) ]),
    'observacoes': new FormControl(null)
  })

  constructor(private alertsPagamento: AlertsPagamento, private pedidoService: PedidoService) { }

  public async abrirAlertSelecao(input: string) {
    if (input === 'pagamento') {
      this.pagamento.formaPagamento = await this.alertsPagamento.presentAlertFormaPagamento()
      this.formularioPagamento.get('formaPagamento').setValue(this.valoresInputs[this.pagamento.formaPagamento])
      this.tipoPagamentoTemplate = this.valoresInputs[this.pagamento.formaPagamento]
      // console.log(this.formularioPagamento.get('formaEntrega'))
    } else if (input === 'entrega') {
      this.pagamento.formaEntrega = await this.alertsPagamento.presentAlertFormaEntrega()
      this.formularioPagamento.get('formaEntrega').setValue(this.valoresInputs[this.pagamento.formaEntrega])
      this.tipoEntregaTemplate = this.valoresInputs[this.pagamento.formaEntrega]
    }
    
  }

  public validarPagamento(): void {
    console.log('Pagamento validado')

  }
  
  ngOnInit() {}

}
