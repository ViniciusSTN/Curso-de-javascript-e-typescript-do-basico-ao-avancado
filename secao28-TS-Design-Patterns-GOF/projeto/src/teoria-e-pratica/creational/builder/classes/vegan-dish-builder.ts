import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans } from './meals';

// a opção de não fazer um if dentro de main-dish-builder para dar opção de prato vegano é para não quebrar o princípio do Open/Closed, pois o código já havia sido testado

// supondo que essa classe não precise dos métodos makeBeverage e makeDessert, então é melhor não ter esses métodos na interface MealBuilderProtocol, para não quebrar o princípio Interface Segregation
export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
