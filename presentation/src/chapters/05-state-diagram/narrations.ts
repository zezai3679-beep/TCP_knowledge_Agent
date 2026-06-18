import type { Narration } from "../../registry/types";
export const narrations: Narration[] = [
  "",
  "客户端一开始是CLOSED初始状态。发了SYN变成SYN_SENT。收到服务器回复变成ESTABLISHED，这就是连接建立成功的状态。想关闭了，发FIN变成FIN_WAIT_1。",
  "服务器一开始在LISTEN状态，监听端口。收到SYN后变成SYN_RECEIVED，回复SYN加ACK后变成ESTABLISHED。收到客户端的FIN后变成CLOSE_WAIT，处理完发完FIN后变成LAST_ACK。",
  "如果你想亲眼看看三次握手四次挥手长什么样，下载一个叫Wireshark的工具。过滤条件写tcp.flags.syn等于1，能看到所有握手包。写tcp.flags.fin等于1，能看到所有挥手包。",
];
