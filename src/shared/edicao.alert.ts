import { AlertButton, AlertController, AlertInput } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

export class AlertEdicao {

    public alertEditar: AlertController = new AlertController()
    public valor: any = ''

    constructor() {  }

    public inputAlertQuantidade: AlertInput[] = [{
        type: "number",
        placeholder: 'Quantidade: ',
        handler: (input: AlertInput) => { console.log(input) },
        min: '1'
    }]

    public alertBotaoOk: AlertButton = {
        text: 'Selecionar Opção',
        handler: (valor: any) => { this.valor = valor }
    }

    public async presentAlert() {
        const alert = await this.alertEditar.create({
        cssClass: 'alertQuantidade',
        header: 'Quantidade desejada',
        message: '<p>* A quantidade precisa ser no mínimo 1</p>',
        inputs: this.inputAlertQuantidade,
        buttons: [this.alertBotaoOk]
        });

        await alert.present();

        this.valor =  await alert.onDidDismiss().then((dado: any) => { return dado.data.values[0] })

        return this.valor
        
    }
}