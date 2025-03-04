import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() { // Método para calcular o total da compra
    this.total = this.itensCarrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0); // Utiliza o método reduce para somar o preço de todos os itens do carrinho
  }
  removerItemCarrinho(produtoId: number | undefined) { // Método para remover um item específico do carrinho pelo ID do produto
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId); // Filtra os itens do carrinho, removendo o item com o ID especificado
    this.carrinhoService.removerItemCarrinho(produtoId); // Atualiza o localStorage com os itens restantes do carrinho
    this.calcularTotal(); // Recalcula o total da compra
  }

  comprar(){
    alert('Compra realizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produto']); // Navega para a rota de produtos
    // this.itensCarrinho = [];
    // this.calcularTotal();
  }

}
