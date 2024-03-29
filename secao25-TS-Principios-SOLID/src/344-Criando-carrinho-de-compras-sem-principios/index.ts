// dica: primeiro fazer o código, depois refatorar usando princípios

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    // o + é para converter para number
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0; // limpar o carrinho
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camisata', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9 });
shoppingCartLegacy.addItem({ name: 'Lápis', price: 1.7 });
// shoppingCartLegacy.clear();

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus);
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
