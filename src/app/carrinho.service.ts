import { Injectable } from '@angular/core'; // Importa o decorator Injectable do Angular
import { IProdutoCarrinho } from './produtos/produtos'; // Importa a interface IProdutoCarrinho
import { RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root' // Define que o serviço será provido na raiz da aplicação
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = []; // Array para armazenar os itens do carrinho

  constructor(

  ) { } // Construtor vazio

  adicionarAoCarrinho(produto: IProdutoCarrinho) { // Método para adicionar um produto ao carrinho
    this.itens.push(produto); // Adiciona o produto ao array de itens
    localStorage.setItem('carrinho', JSON.stringify(this.itens)); // Atualiza o localStorage com os itens do carrinho
  }

  obtemCarrinho() { // Método para obter os itens do carrinho do localStorage
    this.itens = JSON.parse(localStorage.getItem('carrinho') || "[]"); // Converte a string JSON armazenada no localStorage de volta para um array de objetos
    return this.itens; // Retorna os itens do carrinho
  }

  limparCarrinho() { // Método para limpar todos os itens do carrinho e do localStorage
    this.itens = []; // Esvazia o array de itens
    localStorage.clear(); // Limpa o localStorage
  }

  removerItemCarrinho(produtoId: number | undefined) { // Método para remover um item específico do carrinho pelo ID do produto
    this.itens = this.itens.filter(item => item.id !== produtoId); // Filtra os itens do carrinho, removendo o item com o ID especificado
    localStorage.setItem('carrinho', JSON.stringify(this.itens)); // Atualiza o localStorage com os itens restantes do carrinho
  }
}
