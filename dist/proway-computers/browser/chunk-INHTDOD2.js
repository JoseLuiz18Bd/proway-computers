import{W as e}from"./chunk-VL6IMX3E.js";var s=(()=>{class t{constructor(){this.itens=[]}adicionarAoCarrinho(i){this.itens.push(i),localStorage.setItem("carrinho",JSON.stringify(this.itens))}obtemCarrinho(){return this.itens=JSON.parse(localStorage.getItem("carrinho")||"[]"),this.itens}limparCarrinho(){this.itens=[],localStorage.clear()}removerItemCarrinho(i){this.itens=this.itens.filter(r=>r.id!==i),localStorage.setItem("carrinho",JSON.stringify(this.itens))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=e({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{s as a};
