import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProduitsServices {
  //1-donnes
  produits: any;
  constructor(private httpClient: HttpClient) {}
  //2 - traitements 5+(CRUD)
  //2-1 Read or Select
  getAllProduit() {
    return this.httpClient.get('http://localhost:3000/api/v1/produits');
  }
  getOneProduitById(id: number) {
    console.log('GET/:id');
  }
  //2-2 Create or Insert
  addProduit(p: any) {
        return this.httpClient.post('http://localhost:3000/api/v1/produits',p);
  }
  //2-3 Delete
  deleteProductById(id: number) {
  }
  //2-4 Update
  updateProduct(p: any) {
    console.log('post');
  }
}
