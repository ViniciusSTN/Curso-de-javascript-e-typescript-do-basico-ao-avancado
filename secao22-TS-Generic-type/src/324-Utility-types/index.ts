/* eslint-disable @typescript-eslint/no-unused-vars */

// generics padrão

// record<TipoChave, TipoValores> -> tipar as chaves e valores
export const obj1: Record<string, string | number> = {
  nome: 'Vinicius',
  sobrenome: 'Santana',
  idade: 30,
};

type Pessoa = {
  nome?: 'Vinicius';
  sobrenome?: 'Santana';
  idade?: 30;
};

// Required<Tipo> -> transforma tudo que for opcional em required
type PessoaRequired = Required<Pessoa>;

// Partial<Tipo> -> transforma tudo em não requerido
type PessoaPartial = Partial<PessoaRequired>;

// Readonly<Tipo> -> transforma tudo que não for readonly em readonly
type PessoaReadonly = Readonly<Pessoa>;

// Pick<Tipo, pick1, pick2, ...> -> seleciona quais chaves quer no type
type PessoaPick = Pick<Pessoa, 'nome' | 'sobrenome'>;

export const obj2: PessoaRequired = {
  nome: 'Vinicius',
  sobrenome: 'Santana',
  idade: 30,
};

console.log(obj1);
console.log(obj2);

// --------------------------------------------------------------------

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // 'A' | 'B'
type TipoExtract = Extract<ABC, CDE>; // 'C'

// --------------------------------------------------------------------
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

// troca _id por id basicamente
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

// aparentemente funciona do mesmo jeito
// type AccountApi2 = Exclude<keyof AccountMongo, '_id'> & {
//   id: string;
// };
