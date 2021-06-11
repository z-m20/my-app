import { Component, OnInit } from '@angular/core';
import { ProduitsServices } from 'src/services/produits.services';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  constructor(private prodService: ProduitsServices) {}
  produits: any;

  ngOnInit(): void {
    this.prodService.getAllProduit().subscribe((response) => {
      this.produits = response;
      console.log(this.produits);
    });
    let prod = {
      nom: 'The end',
      description: 'un livre',
      prix: 152,
      stock: 1,
    };
    this.prodService.addProduit(prod).subscribe((response) => {});
  }
}
