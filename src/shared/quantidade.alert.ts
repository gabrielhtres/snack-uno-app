import { AlertButton, AlertController, AlertInput } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

export class AlertQuantidade {

    public alertQuantidade: AlertController = new AlertController()
    public valor: any = ''

    constructor() {  }

    public inputAlertQuantidade: AlertInput[] = [{
        type: "number",
        placeholder: 'Quantidade: ',
        handler: (input: AlertInput) => { console.log(input) },
        min: '1'
    }]

    public alertBotaoCancelar: AlertButton = {
        text: 'Cancelar',
        role: 'cancel'
    }

    public alertBotaoOk: AlertButton = {
        text: 'OK',
        handler: (valor: any) => { this.valor = valor[0] }
    }

    public async presentAlert() {
        const alert = await this.alertQuantidade.create({
        cssClass: 'alertQuantidade',
        header: 'Quantidade desejada',
        message: '<p>* A quantidade precisa ser no mínimo 1</p>',
        inputs: this.inputAlertQuantidade,
        buttons: [this.alertBotaoCancelar, this.alertBotaoOk]
        });

        await alert.present();

        this.valor =  await alert.onDidDismiss().then((dado: any) => { return dado.data.values[0] })

        return this.valor
        
    }
}