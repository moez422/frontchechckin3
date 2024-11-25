import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Si vous avez un module de routage
import { AjouterUtilisateurComponent } from './utilisateur/ajouter-utilisateur/ajouter-utilisateur.component'; // Composant standalone
import { HttpClientModule } from '@angular/common/http';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent  // Ne déclarez pas le composaone ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Si vous avez un module de routage
    AjouterUtilisateurComponent,
    HttpClientModule,
    ListUtilisateurComponent,
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  
      // Importez le composant standalone ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
