import { MyDatabaseFunction } from './db/my-database-function';

// const dbClass = MyDatabaseClassic.instance;
// const dbModule = MyDatabaseModule;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

export { myDatabaseClassic };
