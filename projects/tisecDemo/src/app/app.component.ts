import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenu: boolean;
  titulos: Array<any>;
  titulos2: Array<any>;
  exampleData: Array<any>;
  exampleData2: Array<any>;

  constructor() {
    this.isMenu = false;

    this.titulos = [
      { titulo: 'Avengers', id: 'sp' },
      { titulo: 'Extraterrestrials', id: 'g' },
      { titulo: 'Radiation power', id: 'l' },
      { titulo: 'Conventionals', id: 'con' },
      { titulo: 'Gifteds', id: 'e' },
      { titulo: 'Gods', id: 'ts' },
    ];

    this.titulos2 = [
      { titulo: 'Avengers', id: 'av' },
      { titulo: 'Extraterrestrials', id: 'ex' },
      { titulo: 'Radiation powers', id: 'rp' },
      { titulo: 'Conventionals', id: 's' },
      { titulo: 'Gifteds', id: 'gi' },
      { titulo: 'Gods', id: 'go' },
    ];

    this.exampleData = [
      { id: 'ABC1234', selected: false, nombre: 'Captain America', desc: 'Its living in Hawaii after last summer', saldo: 46000 },
      { id: 'ABC1235', selected: false, nombre: 'Hulk', desc: 'Barking Up The Wrong Tree', saldo: 150000 },
      { id: 'ABC1236', selected: false, nombre: 'Ironman', desc: 'Earth Hero', saldo: 3000 },
      { id: 'ABC1237', selected: false, nombre: 'Captain Marvel', desc: 'Flying, flying, flying...', saldo: 170000 },
      { id: 'ABC1238', selected: false, nombre: 'Fat Thor', desc: 'With Asgardians of the Galaxy', saldo: 100000 },
      { id: 'ABC1238', selected: false, nombre: 'Ant-Man', desc: 'Knock Your Socks Off', saldo: 60000 }
    ];

    this.exampleData2 = [
      { id: 'ABC1234', selected: false, nombre: 'Captain America', desc: 'Its living in Jamaica after last summer', saldo: 460000 },
      { id: 'ABC1236', selected: false, nombre: 'Ironman', desc: 'Knock Your Socks Off', saldo: 460000 }
    ];

  }

}
