import { MessageTypeEnum } from "./enums/messageTypeEnum";


export function getMessageType(response: any): MessageTypeEnum {
  const messageType = response.data.messageType; // Assumindo que o dado vem em response.data
  
  switch (messageType) {
    case 'PREVMATCH':
      return MessageTypeEnum.PREVMATCH; // Note que seu enum usa "PREVIOUSMATCH", não "PREVMATCH"
    case 'NEXTMATCH':
      return MessageTypeEnum.NEXTMATCH;
    case 'PLAYERS':
      return MessageTypeEnum.PLAYERS;
    default:
      return MessageTypeEnum.TEXT; // Fallback padrão
  }
}