import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { HomeComponent } from '../home/home.component';
import { MeuPerfilComponent } from '../meu-perfil/meu-perfil.component';
import { MeusCartoesComponent } from '../meus-cartoes/meus-cartoes.component';
import { MeusLocaisComponent } from '../meus-locais/meus-locais.component';
import { MeusPedidosComponent } from '../meus-pedidos/meus-pedidos.component';

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
