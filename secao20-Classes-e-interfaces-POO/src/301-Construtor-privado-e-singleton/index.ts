// padrão de projeto Singleton - GoF
// Factory method - GoF

// Singleton -> garantir que uma classe tenha apenas uma instância de si mesma e que forneça um ponto global de acesso a ela
export class Database {
  private static database: Database;

  // construtor privado
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host} ${this.user} ${this.password}`);
  }

  // Factory method
  static getDatabase(host: string, user: string, password: string): Database {
    // se já tiver uma instância, retorna a primeira instância
    if (Database.database) return Database.database;
    // se não tiver uma instância, cria uma, atribui ao método database e retorna a instância
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// objetivo: impedir que duas instâncias diferentes sejam criadas
// agora as duas instâncias apontam para o mesmo objeto

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root2', '847834');
db2.connect();

console.log(db1 === db2); // por padrão retornaria false mesmo se os dados fossem iguais
