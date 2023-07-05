import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaTrejo';
  numero = 0;
  hayError = true;
  myFontSize = '50px';

  Lista = ['Mauricio Trejo','Mariana Garcia','Estrella De Santiago','Gabriela Arvizu','Paola Torres',''];

  constructor() {
    setInterval(() => {
      this.numero++;
    }, 1000);
  }
}
