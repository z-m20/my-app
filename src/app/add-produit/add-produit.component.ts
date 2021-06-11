import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsServices } from 'src/services/produits.services';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  constructor(private prodService: ProduitsServices) {}

  ngOnInit(): void {}
  addProduit(form: NgForm) {
    let prod = {
      nom: form.value['txtNom'],
      description: form.value['txtDes'],
      prix: form.value['txtPrix'],
      stock: form.value['txtStock'],
    };
    this.prodService
      .addProduit(prod)
      .subscribe((prod) => console.log('added product '));
  }
}
