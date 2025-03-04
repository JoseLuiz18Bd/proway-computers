import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // ProdutosComponent,
    DetalheProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
  ]
})
export class ProdutosModule { }
