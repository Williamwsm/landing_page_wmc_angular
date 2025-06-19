import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { DestaqueComponent } from "./components/destaque/destaque.component";
import { CardsComponent } from "./components/cards/cards.component";
import { CardProdutComponent } from "./components/card-produt/card-produt.component";
import { DestaqueWmcComponent } from "./components/destaque-wmc/destaque-wmc.component";
import { CardDiferenciaisComponent } from "./components/card-diferenciais/card-diferenciais.component";
import { InformacoesComponent } from "./components/informacoes/informacoes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DestaqueComponent, CardsComponent, CardProdutComponent, DestaqueWmcComponent, CardDiferenciaisComponent, InformacoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wmc';
}
