import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  {path: 'produto', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  // {path: 'produtos', component: ProdutosComponent},
  // {path: 'produtos:id', component: DetalheProdutoComponent},
  {path: "", redirectTo: "produto", pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  {path: "**", component: NaoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
