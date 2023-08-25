import { User } from '../interfaces/user';

// módulos se comportam como singleton no TS
const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
