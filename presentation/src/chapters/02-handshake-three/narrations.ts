import type { Narration } from "../../registry/types";

/**
 * Chapter 02 · handshake-three
 * 4 steps: step 0=cold open, steps 1-3=three handshake steps
 * Audio source: script.md §三次握手段落
 */
export const narrations: Narration[] = [
  // step 0: cold open — no narration
  "",
  // step 1: SYN sent
  "在TCP传输数据之前，必须先建立连接。这个过程需要三步，所以叫三次握手。就像你打电话给对方，得等对方接了、说了喂、你回了喂，通话才算真正建立。TCP握手就是在确认——双方的地址都有效，双方都能说话。客户端会发一个特殊的包，叫SYN包。SYN是Synchronize的缩写，意思是同步。这个包里有一个关键数字——初始序列号。",
  // step 2: SYN+ACK returned
  "服务器收到SYN后，会回复一个SYN加ACK的包。ACK的意思是确认收到。服务器也把自己的初始序列号发过来。",
  // step 3: ACK sent, established
  "客户端收到服务器的回复，再发一个ACK包。三次一来一回，双方都确认：收发能力都正常，连接正式建立。",
];
