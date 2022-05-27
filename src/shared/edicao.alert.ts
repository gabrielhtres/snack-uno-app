import { AlertButton, AlertController, AlertInput } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

export class AlertEdicao {

    public alertEditar: AlertController = new AlertController()
    public valor: any = ''

    constructor() {  }

    public inputsAlertEditar: AlertInput[]

    public alertBotaoOk: AlertButton = {
        text: 'Confirmar',
        handler: (valor: any) => { this.valor = valor }
    }

    public async presentAlertEditar(inputs: AlertInput[]) {
        this.inputsAlertEditar = inputs
        const alert = await this.alertEditar.create({
        cssClass: 'alertQuantidade',
        header: 'Editando Cartão',
        message: '<p class="ms-auto me-auto">Para manter os dados atuais, deixe o campo vazio</p>',
        inputs: this.inputsAlertEditar,
        buttons: [this.alertBotaoOk]
        });

        await alert.present();

        this.valor =  await alert.onDidDismiss().then((dado: any) => { return dado.data.values })

        return this.valor
        
    }
}