import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  maProp = 'yellow';
  show = true;
  info = {
    nom: 'Alex',
    email: 'alex@',
    tel: '06xxxxx',
  };

  getName() {
    return this.info.nom;
  }

  changeStatus() {
    this.show = ! this.show;
  }
}
