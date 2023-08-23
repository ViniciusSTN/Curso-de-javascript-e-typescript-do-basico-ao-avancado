import { MessagingProtocol } from '../classes/interfaces/messagins-protocol';

// inversão de dependência
export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}
