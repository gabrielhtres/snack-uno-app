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
    [
      { id: '1', img: '../../assets/pizza.jpg', restaurante: 'Hangar', produto: 'Pizza', descricao: 'Pizza de Calabresa', preco: 5 },
      { id: '2', img: '../../assets/pastel.webp', restaurante: 'Hangar', produto: 'Pastel', descricao: 'Pastel de Frango', preco: 4 },
      { id: '3', img: '../../assets/cafe.jpg', restaurante: 'Hangar', produto: 'Café', descricao: 'Café Preto com Açúcar', preco: 3 }  
    ],
    [
      { id: '1', img: '../../assets/pizza.jpg', restaurante: 'Point', produto: 'Pizza', descricao: 'Pizza de Calabresa', preco: 5.00 },
      { id: '2', img: '../../assets/pastel.webp', restaurante: 'Point', produto: 'Pastel', descricao: 'Pastel de Frango', preco: 4.00 },
      { id: '3', img: '../../assets/cafe.jpg', restaurante: 'Point', produto: 'Café', descricao: 'Café Preto com Açúcar', preco: 3.00 }  
    ]
  ];

  constructor() { }

  ngOnInit() {}

}
