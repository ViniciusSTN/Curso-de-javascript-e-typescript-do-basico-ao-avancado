import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

// a order precisa de um carrinho de compras para fazer um checkout
export class Order {
  private _orderStatus: OrderStatus = 'open';

  // para usar os métodos de outras classes é preciso injetar dependências usando o constructor
  // aqui está quebrando um outro princípio (inversão de dependência)
  constructor(
    // injeção de dependência
    // injetar dependências na classe para delegar os serviços
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
