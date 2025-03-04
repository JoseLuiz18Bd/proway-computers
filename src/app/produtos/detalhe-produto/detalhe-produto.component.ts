import { NotificacaoService } from './../../notificacao.service';
import { Component } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.css'
})
export class DetalheProdutoComponent {
  quantidade: number = 1;
  produto: IProduto | undefined;

  constructor(
      private produtosService: ProdutosService,
      private route: ActivatedRoute,
      private notificacaoService: NotificacaoService,
      private carrinhoService: CarrinhoService,
    ){}

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get('id'));
      this.produto = this.produtosService.getOne(produtoId);
    }

    adicionarAoCarrinho(){
      this.notificacaoService.notificar(`Adicionado ${this.quantidade} ${this.produto?.descricao} ao carrinho`);
      const produto: IProdutoCarrinho = {
        ...this.produto!,
        quantidade: this.quantidade
      }
      this.carrinhoService.adicionarAoCarrinho(produto);
    }

}
