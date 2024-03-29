import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messagins-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

// Order é de alto nível e ShoppingCart por exemplo é de baixo nível, pois Order não sabe fazer os métodos de ShoppingCart

// Mas ShoppingCart é de alto nível e Discount é baixo nível, pois ShoppingCart usa o método de Discount
export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // nesses casos não devem ter relações de acoplamento com Order
    // inversão de dependência
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
