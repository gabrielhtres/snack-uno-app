import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from '../ajuda/ajuda.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { HomeComponent } from '../home/home.component';
import { PesquisaComponent } from '../home/pesquisa/pesquisa.component';
import { LoginComponent } from '../login/login.component';
import { MeuPerfilComponent } from '../meu-perfil/meu-perfil.component';
import { MeusCartoesComponent } from '../meus-cartoes/meus-cartoes.component';
import { MeusFavoritosComponent } from '../meus-favoritos/meus-favoritos.component';
import { MeusLocaisComponent } from '../meus-locais/meus-locais.component';
import { MeusPedidosComponent } from '../meus-pedidos/meus-pedidos.component';
import { MinhaCestaComponent } from '../minha-cesta/minha-cesta.component';
import { PagamentoComponent } from '../pagamento/pagamento.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { ProdutoComponent } from '../produto/produto.component';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'home/:id',
        component: HomeComponent
      },
      {
        path: 'meu-perfil',
        component: MeuPerfilComponent
      },
      {
        path: 'meus-pedidos',
        component: MeusPedidosComponent
      },
      {
        path: 'meus-cartoes',
        component: MeusCartoesComponent
      },
      {
        path: 'meus-locais',
        component: MeusLocaisComponent
      },
      {
        path: 'configuracoes',
        component: ConfiguracoesComponent
      },
      {
        path: 'minha-cesta',
        component: MinhaCestaComponent
      },
      {
        path: 'produto/:id',
        component: ProdutoComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'pagamento',
        component: PagamentoComponent
      },
      {
        path: 'pedido/:id',
        component: PedidoComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'meus-favoritos',
        component: MeusFavoritosComponent
      },
      {
        path: 'ajuda',
        component: AjudaComponent
      },
      {
        path: 'pesquisa/:tipoPesquisa',
        component: PesquisaComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
