import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider-produtos',
  templateUrl: './slider-produtos.component.html',
  styleUrls: ['./slider-produtos.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SliderProdutosComponent implements OnInit {
  public dadosProdutos = [
    { img: 'https://picsum.photos/400/200', restaurante: 'Hangar', produto: 'Pizza', descricao: 'Pizza de Calabresa', preco: 'R$ 5.00' },
    { img: 'https://picsum.photos/400/200', restaurante: 'Hangar', produto: 'Pastel', descricao: 'Pastel de Frango', preco: 'R$ 4.00' },
    { img: 'https://picsum.photos/400/200', restaurante: 'Hangar', produto: 'Café', descricao: 'Café Preto com Açúcar', preco: 'R$ 3.00' }  
  ]

  constructor() { }

  ngOnInit() {}

}
