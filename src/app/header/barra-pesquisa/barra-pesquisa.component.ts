import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent implements OnInit {

  descricao = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  pesquisar() {
    if(this.descricao){
      this.router.navigate(["produto"], { queryParams: { descricao: this.descricao } });
      return;
    }
    this.router.navigate(["produto"]);
  }

}
