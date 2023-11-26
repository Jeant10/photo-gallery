import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Estas seguro de salir?',
      message: 'Las fotos que no se hayan guardado, se borraran',
      buttons: ['Continuar','Salir'],
    });

    await alert.present();
  }

}
