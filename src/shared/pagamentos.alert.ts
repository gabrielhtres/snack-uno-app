import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

export class AlertsPagamento {

    public alertFormaPagamento: AlertController = new AlertController()
    public alertFormaEntrega: AlertController = new AlertController()
    public valor: string = ''

    constructor() {  }

    public selectAlertPagamento: AlertInput[] = [
        {
            type: "radio",
            label: 'Pix',
            placeholder: 'Pix',
            value: 'pix'
        },
        {
            type: "radio",
            label: 'Cartão de Crédito',
            placeholder: 'Cartão de Crédito',
            value: 'credito'
        },
        {
            type: "radio",
            label: 'Cartão de Débito',
            placeholder: 'Cartão de Débito',
            value: 'debito'
        }
    ]

    public selectAlertEntrega: AlertInput[] = [
        {
            type: "radio",
            label: 'Retirada',
            placeholder: 'Retirada',
            value: 'retirada'
        },
        {
            type: "radio",
            label: 'Entrega',
            placeholder: 'Entrega',
            value: 'entrega'
        }
    ]

    public alertBotaoOk: AlertButton = {
        text: 'Selecionar Opção',
        handler: (valor: any) => { this.valor = valor }
    }

    public async presentAlertFormaPagamento() {
        const alertPagamento = await this.alertFormaPagamento.create({
        cssClass: 'alertClass',
        header: 'Forma de Pagamento',
        inputs: this.selectAlertPagamento,
        buttons: [this.alertBotaoOk]
        });

        await alertPagamento.present();

        this.valor =  await alertPagamento.onDidDismiss().then((dado: any) => { return dado.data.values })
        
        if (this.valor == undefined) {
            this.valor = ''
        }
        
        return this.valor
        
    }

    public async presentAlertFormaEntrega() {
        const alertEntrega = await this.alertFormaEntrega.create({
        cssClass: 'alertClass',
        header: 'Quantidade desejada',
        inputs: this.selectAlertEntrega,
        buttons: [this.alertBotaoOk],
        backdropDismiss: false
        });

        await alertEntrega.present();

        this.valor =  await alertEntrega.onDidDismiss().then((dado: any) => { return dado.data.values })

        if (this.valor == undefined) {
            this.valor = ''
        }

        return this.valor
        
    }
}