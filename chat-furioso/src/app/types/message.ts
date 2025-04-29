import { MessageTypeEnum } from "./messageTypeEnum";
import { SenderEnum } from "./SenderEnum";

export type Message =  {
    text: string;
    sender: SenderEnum;
    type: MessageTypeEnum;
  }

export type MessageList = {
    message: Message[];
  }