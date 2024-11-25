import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUtilisateurComponent } from './utilisateur/ajouter-utilisateur/ajouter-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';



const routes: Routes = [
  { path: 'ajouter-utilisateur', component: AjouterUtilisateurComponent },
  { path: 'list-utilisateurs', component: ListUtilisateurComponent },
 

  { path: '', redirectTo: '/list-utilisateurs', pathMatch: 'full' } // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
