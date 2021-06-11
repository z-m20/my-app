import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  color = 'red';
  personne = {
    matricule: 123,
    nom: 'Adriana',
    birthDay: new Date(),
    carPrice: 26000,
  };
  tab = [1, 2, 3, 5, 6];
  constructor() {}

  ngOnInit(): void {}

  changeColor(input: HTMLInputElement) {
    console.log(input);
    this.color = input.value;
  }
}
