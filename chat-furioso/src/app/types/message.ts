import { MessageTypeEnum } from "../../utils/enums/messageTypeEnum";
import { NextMatchInfo } from "./nextMatchInfo";
import { PrevMatchInfo } from "./prevMatch";
import { SenderEnum } from "../../utils/enums/SenderEnum";

export type Message =  {
    text: string;
    sender: SenderEnum;
    type: MessageTypeEnum;
    prevMatchInfo? : PrevMatchInfo
    nextMatchInfo? : NextMatchInfo
  }

export type MessageList = {
    message: Message[];
  }