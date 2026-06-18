import type { ChapterDef } from "./types";
import IntroTcp from "../chapters/01-intro-tcp/IntroTcp";
import { narrations as introTcpNarrations } from "../chapters/01-intro-tcp/narrations";
import HandshakeThree from "../chapters/02-handshake-three/HandshakeThree";
import { narrations as handshakeThreeNarrations } from "../chapters/02-handshake-three/narrations";
import HandshakeWhy from "../chapters/03-handshake-why/HandshakeWhy";
import { narrations as handshakeWhyNarrations } from "../chapters/03-handshake-why/narrations";
import WaveFour from "../chapters/04-wave-four/WaveFour";
import { narrations as waveFourNarrations } from "../chapters/04-wave-four/narrations";
import StateDiagram from "../chapters/05-state-diagram/StateDiagram";
import { narrations as stateDiagramNarrations } from "../chapters/05-state-diagram/narrations";
import InterviewQa from "../chapters/06-interview-qa/InterviewQa";
import { narrations as interviewQaNarrations } from "../chapters/06-interview-qa/narrations";
import Summary from "../chapters/summary/Summary";
import { narrations as summaryNarrations } from "../chapters/summary/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "intro-tcp",
    title: "TCP是什么",
    narrations: introTcpNarrations,
    Component: IntroTcp,
  },
  {
    id: "handshake-three",
    title: "三次握手",
    narrations: handshakeThreeNarrations,
    Component: HandshakeThree,
  },
  {
    id: "handshake-why",
    title: "为什么是三次",
    narrations: handshakeWhyNarrations,
    Component: HandshakeWhy,
  },
  {
    id: "wave-four",
    title: "四次挥手",
    narrations: waveFourNarrations,
    Component: WaveFour,
  },
  {
    id: "state-diagram",
    title: "状态转换",
    narrations: stateDiagramNarrations,
    Component: StateDiagram,
  },
  {
    id: "interview-qa",
    title: "面试常问",
    narrations: interviewQaNarrations,
    Component: InterviewQa,
  },
  {
    id: "summary",
    title: "总结",
    narrations: summaryNarrations,
    Component: Summary,
  },
];
