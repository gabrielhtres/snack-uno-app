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

  constructor() { }

  ngOnInit() {}

}
