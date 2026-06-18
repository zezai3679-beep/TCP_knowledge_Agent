import "./InterviewQa.css";
import { narrations } from "./narrations";

export default function InterviewQa({ step }: { step: number }) {
  // ── step 0: Title ──
  if (step === 0) {
    return (
      <div className="iq-root iq-step-0">
        <div className="iq-title-block">
          <div className="iq-section-tag">// TCP · interview</div>
          <div className="iq-main-title">面试常问</div>
          <div className="iq-subtitle">四道经典TCP问题</div>
        </div>
        <div className="iq-corner-info">Chapter 06 · 面试问答</div>
      </div>
    );
  }

  // ── step 1: Q1 — 为什么是三次握手 ──
  if (step === 1) {
    return (
      <div className="iq-root iq-step-1">
        <div className="iq-card">
          <div className="iq-q-badge">Q1</div>
          <div className="iq-q-title">为什么是三次握手？</div>
          <div className="iq-q-divider" />
          <div className="iq-q-explain">
            两次握手无法防止历史连接混乱。当客户端超时重发SYN时，服务器会收到两个SYN分节，无法分辨新旧。三次握手时客户端最终确认，服务器若记得该序号则判定为历史连接并终止。
          </div>
        </div>

        <div className="iq-syn-scene">
          {/* Client */}
          <div className="iq-node-box">
            <span className="iq-node-name">客户端</span>
            <span className="iq-node-state">SYN_SENT</span>
          </div>

          {/* Arrow zone */}
          <div className="iq-arrow-zone">
            {/* Old SYN (stale, delayed) */}
            <div className="iq-syn-packet iq-syn-packet-old">
              <span className="iq-packet-label">SYN</span>
              <span className="iq-packet-seq">seq=u (旧)</span>
            </div>
            <span className="iq-packet-note" style={{ top: "4px", left: "0" }}>超时重发的历史SYN</span>

            {/* New SYN */}
            <div className="iq-syn-packet iq-syn-packet-new">
              <span className="iq-packet-label">SYN</span>
              <span className="iq-packet-seq">seq=u (新)</span>
            </div>
            <span className="iq-packet-note" style={{ top: "64px", left: "0" }}>重新发出的SYN</span>

            <div className="iq-server-confused">
              服务器：哪个是新的？<br />无法分辨！
            </div>
          </div>

          {/* Server */}
          <div className="iq-node-box">
            <span className="iq-node-name">服务器</span>
            <span className="iq-node-state">SYN_RCVD x2</span>
          </div>
        </div>

        <div className="iq-corner-info">Step 1 of 4 · Q1 为什么三次握手</div>
      </div>
    );
  }

  // ── step 2: Q2 — 为什么是四次挥手 ──
  if (step === 2) {
    return (
      <div className="iq-root iq-step-2">
        <div className="iq-card">
          <div className="iq-q-badge">Q2</div>
          <div className="iq-q-title">为什么是四次挥手？</div>
          <div className="iq-q-divider" />
          <div className="iq-q-explain">
            TCP是全双工协议。双向的意思是数据可以同时从A发到B，也可以同时从B发到A。你说"发完了"，对方说"收到了"，但对方可能还有数据要发给你。所以服务器先回ACK，等数据发完了再发FIN告诉你"我也发完了"。
          </div>
        </div>

        <div className="iq-duplex-scene">
          {/* Client */}
          <div className="iq-duplex-node">
            <span className="iq-duplex-name">客户端</span>
            <span className="iq-duplex-state">全双工</span>
          </div>

          {/* Dual arrows */}
          <div className="iq-duplex-arrows">
            <div className="iq-arrow-top" />
            <div className="iq-arrow-bottom" />
            <div className="iq-duplex-labels">
              <span className="iq-duplex-label-text">数据流 A→B</span>
              <span className="iq-duplex-label-text">数据流 B→A</span>
            </div>
          </div>

          {/* Server */}
          <div className="iq-duplex-node">
            <span className="iq-duplex-name">服务器</span>
            <span className="iq-duplex-state">全双工</span>
          </div>
        </div>

        <div className="iq-corner-info">Step 2 of 4 · Q2 为什么四次挥手</div>
      </div>
    );
  }

  // ── step 3: Q3 — SYN洪水攻击 ──
  if (step === 3) {
    return (
      <div className="iq-root iq-step-3">
        <div className="iq-card">
          <div className="iq-q-badge">Q3</div>
          <div className="iq-q-title">SYN洪水攻击是什么？</div>
          <div className="iq-q-divider" />
          <div className="iq-q-explain">
            一种经典DDoS攻击。攻击者疯狂发送SYN包但不完成握手，服务器维护大量半开连接耗尽资源。防御手段：SYN Cookie、缩短SYN Timeout、防火墙过滤。
          </div>
        </div>

        <div className="iq-attack-scene">
          {/* Attackers */}
          <div className="iq-attackers">
            <span className="iq-attacker-label">攻击者</span>
            <div className="iq-attacker-node">
              <span className="iq-attacker-name">Attacker-1</span>
            </div>
            <div className="iq-attacker-node">
              <span className="iq-attacker-name">Attacker-2</span>
            </div>
            <div className="iq-attacker-node">
              <span className="iq-attacker-name">Attacker-N</span>
            </div>
          </div>

          {/* SYN flood wave */}
          <div className="iq-syn-wave">
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
            <div className="iq-syn-wave-item" />
          </div>

          {/* Server */}
          <div className="iq-server-half">
            <div className="iq-server-half-open">
              <span className="iq-server-name">服务器</span>
              <span className="iq-server-state">半开连接栈溢出</span>
              <div className="iq-half-stack">
                <div className="iq-half-item" />
                <div className="iq-half-item" />
                <div className="iq-half-item" />
                <div className="iq-half-item" />
                <div className="iq-half-item" />
                <div className="iq-half-item" />
              </div>
            </div>

            <div className="iq-defense-block">
              <span className="iq-defense-label">防御</span>
              <span className="iq-defense-badge">SYN Cookie</span>
            </div>
          </div>
        </div>

        <div className="iq-corner-info">Step 3 of 4 · Q3 SYN洪水攻击</div>
      </div>
    );
  }

  // ── step 4: Q4 — TIME_WAIT为什么60秒 ──
  if (step === 4) {
    return (
      <div className="iq-root iq-step-4">
        <div className="iq-card">
          <div className="iq-q-badge">Q4</div>
          <div className="iq-q-title">TIME_WAIT为什么是60秒？</div>
          <div className="iq-q-divider" />
          <div className="iq-q-explain">
            2MSL = 最大报文生存时间的两倍。一个报文在网络上最多存活MSL（通常30秒），两倍就是60秒。等2MSL是为了确保关闭过程中散落在网络上的所有报文都消失，不影响新建立的连接。
          </div>
        </div>

        <div className="iq-msl-scene">
          {/* Left explanation */}
          <div className="iq-msl-breakdown">
            <div className="iq-msl-row">
              <span className="iq-msl-row-label">MSL</span>
              <span className="iq-msl-row-value">Max Segment Lifetime<br />报文最大生存时间</span>
            </div>
            <div className="iq-msl-arrow">x2</div>
            <div className="iq-msl-row">
              <span className="iq-msl-row-label">MSL 通常为</span>
              <span className="iq-msl-row-value">30 秒</span>
            </div>
            <div className="iq-msl-row">
              <span className="iq-msl-row-label">所以 2MSL =</span>
              <span className="iq-msl-row-value">60 秒</span>
            </div>
          </div>

          {/* Circle */}
          <div className="iq-msl-wrap">
            <div className="iq-msl-circle">
              <div className="iq-msl-inner">
                <div className="iq-msl-number">60</div>
                <div className="iq-msl-label">TIME_WAIT</div>
                <div className="iq-msl-sublabel">= 2MSL</div>
              </div>
            </div>
            <div className="iq-msl-caption">等待散落报文消失</div>
          </div>

          {/* Right explanation */}
          <div className="iq-msl-breakdown">
            <div className="iq-msl-row">
              <span className="iq-msl-row-label">目的</span>
              <span className="iq-msl-row-value">确保关闭过程中<br />所有包都从网络消失</span>
            </div>
            <div className="iq-msl-row">
              <span className="iq-msl-row-label">防止影响</span>
              <span className="iq-msl-row-value">新建立的连接<br />被旧报文混淆</span>
            </div>
          </div>
        </div>

        <div className="iq-corner-info">Step 4 of 4 · Q4 TIME_WAIT 60秒</div>
      </div>
    );
  }

  return null;
}
