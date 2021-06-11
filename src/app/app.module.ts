import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ContenuComponent } from './contenu/contenu.component';
import { SideComponent } from './side/side.component';
import { ProduitsServices } from 'src/services/produits.services';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    CategorieComponent,
    ProduitComponent,
    MenuComponent,
    ContenuComponent,
    SideComponent,
    AddProduitComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProduitsServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
