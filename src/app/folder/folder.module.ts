import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../home/home.component';
import { MeuPerfilComponent } from '../meu-perfil/meu-perfil.component';
import { MeusCartoesComponent } from '../meus-cartoes/meus-cartoes.component';
import { MeusLocaisComponent } from '../meus-locais/meus-locais.component';
import { MeusPedidosComponent } from '../meus-pedidos/meus-pedidos.component';
import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { SliderProdutosComponent } from '../slider-produtos/slider-produtos.component';
import { SwiperModule } from "swiper/angular";
import { MinhaCestaComponent } from '../minha-cesta/minha-cesta.component';
import { ProdutoComponent } from '../produto/produto.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { PagamentoComponent } from '../pagamento/pagamento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  declarations: [
    FolderPage,
    HomeComponent,
    MeuPerfilComponent,
    MeusCartoesComponent,
    MeusLocaisComponent,
    MeusPedidosComponent,
    ConfiguracoesComponent,
    SliderProdutosComponent,
    MinhaCestaComponent,
    ProdutoComponent,
    CadastroComponent,
    PagamentoComponent
  ]
})
export class FolderPageModule {}
