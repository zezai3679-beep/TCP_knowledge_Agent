import type { Narration } from "../../registry/types";

/**
 * Chapter 01 · intro-tcp
 * 3 steps matching IntroTcp.tsx if (step === N) branches (step 0 = cold open = no narration)
 * Each entry = spoken text for audio synthesis; auto-split by script.md sections.
 */
export const narrations: Narration[] = [
  // step 0: cold open — no narration (hero stays silent)
  "",
  // step 1: delivery metaphor
  "TCP，中文叫传输控制协议。它在互联网七层模型里属于传输层，是最核心的协议之一。说白了，TCP就是一个保证数据可靠送达的快递服务。你的数据从电脑到服务器，中途可能丢包、可能乱序、可能出错。TCP就是那个保证东西完好无损、按顺序送到你手上的快递员。",
  // step 2: three feature cards
  "可靠、有序、不丢失——这是TCP的三个核心承诺。",
];