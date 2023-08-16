// a relação é mais forte pois vários métodos do carrinho de compras usam o produto
// carrinho de compras agrega produtos

// 1 -<>--------------- 0..* (1 carrinho pode ter 0 ou mais produtos)
// 1 -<>--------------- 1..* (1 carrinho pode ter 1 ou mais produtos)
// 1 -<>--------------- *    (1 carrinho pode agregar vários produtos)

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 9.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProduto());
