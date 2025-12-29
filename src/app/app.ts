import { RouterOutlet } from "@angular/router";
import { Cabecalho } from "../home/cabecalho/cabecalho";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecalho], // Mantenha seus imports aqui
  template: `
    <app-cabecalho></app-cabecalho>

    <router-outlet></router-outlet> 
  `,
  styleUrls: [] // ou styles dependendo da sua versão
})
export class App {
  // ...
}