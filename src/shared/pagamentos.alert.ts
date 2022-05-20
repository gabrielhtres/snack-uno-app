import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

export class AlertsPagamento {

    public alertFormaPagamento: AlertController = new AlertController()
    public alertFormaEntrega: AlertController = new AlertController()
    public valorPagamento: any = ''

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
            placeholder: 'Retirada',
            handler: (input: AlertInput) => { console.log(input) }
        },
        {
            type: "radio",
            placeholder: 'Entrega',
            handler: (input: AlertInput) => { console.log(input) }
        }
    ]

    public alertBotaoCancelar: AlertButton = {
        text: 'Cancelar',
        role: 'cancel'
    }

    public alertBotaoOk: AlertButton = {
        text: 'OK',
        handler: (valor: any) => { this.valorPagamento = valor.data }
    }

    public async presentAlertFormaPagamento() {
        const alert = await this.alertFormaPagamento.create({
        cssClass: 'alertQuantidade',
        header: 'Forma de Pagamento',
        inputs: this.selectAlertPagamento,
        buttons: [this.alertBotaoCancelar, this.alertBotaoOk]
        });

        await alert.present();

        this.valorPagamento =  await alert.onDidDismiss().then((dado: any) => { return dado.data.values })

        return this.valorPagamento
        
    }

    public async presentAlertFormaEntrega() {
        const alert = await this.alertFormaEntrega.create({
        cssClass: 'alertQuantidade',
        header: 'Quantidade desejada',
        inputs: this.selectAlertEntrega,
        buttons: [this.alertBotaoCancelar, this.alertBotaoOk]
        });

        await alert.present();

        this.valorPagamento =  await alert.onDidDismiss().then((dado: any) => { return dado.data.values })

        return this.valorPagamento
        
    }
}