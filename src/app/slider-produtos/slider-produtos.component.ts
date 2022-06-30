import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Produto } from 'src/shared/produto.model';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

import { Restaurante } from '../../shared/restaurante.model'
import { ProdutosService } from '../produtos.service';
import { RestauranteService } from '../restaurante.service';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider-produtos',
  templateUrl: './slider-produtos.component.html',
  styleUrls: ['./slider-produtos.component.scss'],
  providers: [ ProdutosService, RestauranteService ],
  encapsulation: ViewEncapsulation.None
})
export class SliderProdutosComponent implements OnInit {

  public restaurantes: Restaurante[] = []
  public produtosSlider: Produto[][] = []
  // public produtos: string[]  = ['1', '2', '3']

  constructor(
    private restauranteService: RestauranteService,
    private produtoService: ProdutosService
  ) { }

  public indexArray(id: number) {
    for(let i=0;i<this.restaurantes.length;i++) {
      if(this.restaurantes[i].id_restaurant === id) {
        return i
      }
    }
    return undefined
  }

  public substituirRestauranteProdutos(produtos: any): Produto[] {
    let indiceRestaurante = this.indexArray(produtos[0].restaurante)
    for(let i=0;i<produtos.length;i++) {
      produtos[i].restaurante = this.restaurantes[indiceRestaurante].name
    }

    return produtos
  }

  ngOnInit() {
    SwiperCore.use([Pagination]);
    this.restauranteService.getAllRestaurantes()
      .subscribe((restaurantes: Restaurante[]) => {
        this.restaurantes = restaurantes
        console.log(restaurantes)
        for(let i=0; i<this.restaurantes.length; i++) {
          this.produtoService.getProdutosPorRestaurante(this.restaurantes[i].id_restaurant)
            .subscribe((produtos: Produto[]) => {
              let produtosAlterados = this.substituirRestauranteProdutos(produtos)
              this.produtosSlider.push(produtosAlterados)      
          })
        }
      })
  }
}
