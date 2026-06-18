import "./WaveFour.css";
import { narrations } from "./narrations";

export default function WaveFour({ step }: { step: number }) {
  // ── step 0: cold open — title + hook ──
  if (step === 0) {
    return (
      <div className="wf-root wf-step-0">
        <div className="wf-title-block">
          <div className="wf-section-tag">// TCP · 关闭连接</div>
          <div className="wf-main-title">四次挥手</div>
          <div className="wf-hook-line">
            <span className="wf-hook-q">?</span>
            <span className="wf-hook-text">为什么需要四步？</span>
          </div>
        </div>
        <div className="wf-corner-info">Four-way Termination · TCP</div>
      </div>
    );
  }

  // ── step 1: Client sends FIN, Server replies ACK (first 2 packets) ──
  if (step === 1) {
    return (
      <div className="wf-root wf-step-1">
        <div className="wf-step-label">第一步 + 第二步</div>
        <div className="wf-scene">
          {/* Client node */}
          <div className="wf-node wf-node--client">
            <div className="wf-node-box">
              <span className="wf-node-name">客户端</span>
              <div className="wf-node-state">ESTABLISHED</div>
            </div>
          </div>

          {/* Arrow zone */}
          <div className="wf-arrow-zone">
            {/* FIN packet */}
            <div className="wf-packet wf-packet-fin">
              <span className="wf-packet-label">FIN</span>
              <span className="wf-packet-seq">seq=u</span>
            </div>
            <div className="wf-packet-desc wf-packet-desc-fin">我要关闭了</div>

            {/* Arrow line */}
            <div className="wf-arrow-line wf-arrow-f1" />
            <div className="wf-arrow-head wf-arrow-head-r" />

            {/* ACK packet */}
            <div className="wf-packet wf-packet-ack-s1">
              <span className="wf-packet-label">ACK</span>
              <span className="wf-packet-seq">ack=u+1</span>
            </div>
            <div className="wf-packet-desc wf-packet-desc-ack-s1">确认关闭请求</div>

            {/* Return arrow */}
            <div className="wf-arrow-return-line" />
            <div className="wf-arrow-head wf-arrow-head-l wf-arrow-return-head" />
          </div>

          {/* Server node */}
          <div className="wf-node wf-node--server">
            <div className="wf-node-box">
              <span className="wf-node-name">服务器</span>
              <div className="wf-node-state">ESTABLISHED</div>
            </div>
          </div>
        </div>

        <div className="wf-explain-bar">
          <span className="wf-exp-icon">→</span>
          <span>客户端发 FIN 求关闭，服务器回 ACK 确认</span>
        </div>
        <div className="wf-corner-info">Step 1 of 4 · 第一次挥手</div>
      </div>
    );
  }

  // ── step 2: Server sends FIN, Client replies ACK (last 2 packets) ──
  if (step === 2) {
    return (
      <div className="wf-root wf-step-2">
        <div className="wf-step-label">第三步 + 第四步</div>
        <div className="wf-scene">
          {/* Client node */}
          <div className="wf-node wf-node--client">
            <div className="wf-node-box">
              <span className="wf-node-name">客户端</span>
              <div className="wf-node-state">CLOSE_WAIT</div>
            </div>
          </div>

          {/* Arrow zone */}
          <div className="wf-arrow-zone">
            {/* FIN from server */}
            <div className="wf-packet wf-packet-fin-s2">
              <span className="wf-packet-label">FIN</span>
              <span className="wf-packet-seq">seq=v</span>
            </div>
            <div className="wf-packet-desc wf-packet-desc-fin-s2">服务器也发完了</div>

            <div className="wf-arrow-line wf-arrow-f2" />
            <div className="wf-arrow-head wf-arrow-head-r" />

            {/* ACK from client */}
            <div className="wf-packet wf-packet-ack-s2">
              <span className="wf-packet-label">ACK</span>
              <span className="wf-packet-seq">ack=v+1</span>
            </div>
            <div className="wf-packet-desc wf-packet-desc-ack-s2">确认关闭</div>

            {/* Return arrow */}
            <div className="wf-arrow-return-line wf-arrow-return-flip" />
            <div className="wf-arrow-head wf-arrow-head-l wf-arrow-return-head" />
          </div>

          {/* Server node */}
          <div className="wf-node wf-node--server">
            <div className="wf-node-box">
              <span className="wf-node-name">服务器</span>
              <div className="wf-node-state">LAST_ACK</div>
            </div>
          </div>
        </div>

        <div className="wf-explain-bar">
          <span className="wf-exp-icon">→</span>
          <span>服务器把数据发完后也发 FIN，客户端回 ACK</span>
        </div>
        <div className="wf-corner-info">Step 2 of 4 · 第二次挥手</div>
      </div>
    );
  }

  // ── step 3: TIME_WAIT — countdown timer ──
  if (step === 3) {
    return (
      <div className="wf-root wf-step-3">
        <div className="wf-step-label">等待阶段</div>
        <div className="wf-timer-scene">
          {/* Left client node (faded) */}
          <div className="wf-node wf-node--client">
            <div className="wf-node-box wf-node-box--faded">
              <span className="wf-node-name">客户端</span>
              <div className="wf-node-state">TIME_WAIT</div>
            </div>
          </div>

          {/* Timer circle */}
          <div className="wf-timer-wrap">
            <div className="wf-timer-circle">
              <div className="wf-timer-inner">
                <div className="wf-timer-number">60</div>
                <div className="wf-timer-label">TIME_WAIT</div>
                <div className="wf-timer-sublabel">2MSL</div>
              </div>
            </div>
            <div className="wf-timer-caption">等待 60 秒</div>
            <div className="wf-timer-reason">
              防止最后的 ACK 丢失 — 服务器重发 FIN 时客户端还能收到
            </div>
          </div>

          {/* Right server node (faded) */}
          <div className="wf-node wf-node--server">
            <div className="wf-node-box wf-node-box--faded">
              <span className="wf-node-name">服务器</span>
              <div className="wf-node-state">CLOSED</div>
            </div>
          </div>
        </div>

        <div className="wf-corner-info">Step 3 of 4 · TIME_WAIT</div>
      </div>
    );
  }

  // ── step 4: Both sides CLOSED ──
  if (step === 4) {
    return (
      <div className="wf-root wf-step-4">
        <div className="wf-step-label">连接关闭</div>
        <div className="wf-scene">
          {/* Client node */}
          <div className="wf-node wf-node--client">
            <div className="wf-node-box wf-node-box--closed">
              <span className="wf-node-name">客户端</span>
              <div className="wf-node-state wf-node-state--closed">CLOSED</div>
            </div>
          </div>

          {/* Dashed separator */}
          <div className="wf-closed-sep">
            <div className="wf-closed-line" />
            <div className="wf-closed-x">✕</div>
            <div className="wf-closed-line" />
          </div>

          {/* Server node */}
          <div className="wf-node wf-node--server">
            <div className="wf-node-box wf-node-box--closed">
              <span className="wf-node-name">服务器</span>
              <div className="wf-node-state wf-node-state--closed">CLOSED</div>
            </div>
          </div>
        </div>

        {/* Closed banner */}
        <div className="wf-closed-banner">
          <div className="wf-closed-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <span>连接正式关闭</span>
        </div>

        <div className="wf-corner-info">Step 4 of 4 · 四次挥手完成</div>
      </div>
    );
  }

  return null;
}
