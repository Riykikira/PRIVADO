import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // <--- Verifica se o caminho está certo

export const routes: Routes = [
  {
    path: '', // Caminho vazio = Página inicial
    component: HomeComponent
  }
];