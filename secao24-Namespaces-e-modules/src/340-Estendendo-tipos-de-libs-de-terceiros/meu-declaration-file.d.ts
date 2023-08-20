// agora toda vez que usar o lodash ele vai recomendar mul

declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}
