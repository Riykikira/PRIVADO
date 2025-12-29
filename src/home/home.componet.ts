import { Component } from '@angular/core';
import { Cabecalho } from './cabecalho/cabecalho';
import { CorpoComponet } from "./corpo.componet/corpo.componet";

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Cabecalho, CorpoComponet],
  templateUrl: './home.componet.html',
  styleUrl: './home.css',
})
export class Home {

}
