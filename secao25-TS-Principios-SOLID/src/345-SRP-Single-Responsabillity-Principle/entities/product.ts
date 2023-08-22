import { CartItem } from './interfaces/cart-item';

// aqui já está aplicando o princípio da inversão de dependência, pois está implementando uma interface
export class Product implements CartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
