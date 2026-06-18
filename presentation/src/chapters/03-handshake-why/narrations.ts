import type { Narration } from "../../registry/types";
export const narrations: Narration[] = [
  "",
  "一次不够——客户端发了SYN就以为连上了，但服务器可能根本没收到。两次也有问题——服务器发了SYN加ACK，万一ACK丢了怎么办。三次刚刚好，双方都确认对方收到了自己的消息。",
  "三次握手确认双方收发能力，建立可靠连接。",
  "",
];
