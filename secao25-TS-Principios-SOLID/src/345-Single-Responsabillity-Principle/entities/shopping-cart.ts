// dica: primeiro fazer o código, depois refatorar usando princípios

// Princípio da responsabilidade única
// -> Uma classe deve ter um e apenas um motivo para mudar
// a classe deve ter apenas uma responsabilidade

import { CartItem } from './interfaces/cart-item';

// uma forma de analisar se a classe está coesa é ver se os métodos usam os atributos da propria classe

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  // validações podem ser feitas a parte caso forem usadas várias vezes
  // nesse caso só está sendo usado uma vez
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
