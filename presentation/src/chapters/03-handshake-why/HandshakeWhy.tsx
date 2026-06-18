import "./HandshakeWhy.css";

export default function HandshakeWhy({ step }: { step: number }) {
  // ── step 0: title + hook ──
  if (step === 0) {
    return (
      <div className="hw-root hw-step-0">
        <div className="hw-title-block">
          <div className="hw-section-tag">// TCP · 为什么是三次</div>
          <div className="hw-main-title">为什么是三次</div>
          <div className="hw-hook-line">
            <span className="hw-hook-q">?</span>
            <span className="hw-hook-text">一次不够吗？两次呢？</span>
          </div>
        </div>
        <div className="hw-corner-info">Why Three-way · TCP Handshake</div>
      </div>
    );
  }

  // ── step 1: ONE HANDSHAKE FAIL — SYN sent but server never receives ──
  if (step === 1) {
    return (
      <div className="hw-root hw-step-1">
        <div className="hw-step-label">一次握手 · 失败场景</div>
        <div className="hw-scene">
          {/* Client */}
          <div className="hw-node hw-node--client">
            <div className="hw-node-box">
              <span className="hw-node-name">客户端</span>
              <div className="hw-node-state">CLOSED</div>
            </div>
          </div>

          {/* Arrow — SYN lost */}
          <div className="hw-arrow-zone">
            <div className="hw-arrow-track">
              <div className="hw-arrow-line hw-arrow-s1-lost" />
              <div className="hw-packet hw-packet-s1-lost">
                <span className="hw-packet-label">SYN</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-r hw-arrow-head-lost" />
            </div>
            <div className="hw-lost-x">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          {/* Server */}
          <div className="hw-node hw-node--server">
            <div className="hw-node-box">
              <span className="hw-node-name">服务器</span>
              <div className="hw-node-state">LISTEN</div>
            </div>
          </div>
        </div>

        <div className="hw-problem-card">
          <div className="hw-problem-title">SYN 在网络中丢失</div>
          <div className="hw-problem-desc">
            客户端发了 SYN 就以为连上了<br />
            但服务器根本没收到
          </div>
        </div>

        <div className="hw-corner-info">Step 1 of 3 · 一次不够</div>
      </div>
    );
  }

  // ── step 2: TWO HANDSHAKES — SYN+ACK sent but ACK lost ──
  if (step === 2) {
    return (
      <div className="hw-root hw-step-2">
        <div className="hw-step-label">两次握手 · 死等风险</div>
        <div className="hw-scene">
          {/* Client */}
          <div className="hw-node hw-node--client">
            <div className="hw-node-box">
              <span className="hw-node-name">客户端</span>
              <div className="hw-node-state">CLOSED</div>
            </div>
            <div className="hw-node-label-top">seq=x</div>
          </div>

          {/* Arrow zone */}
          <div className="hw-arrow-zone">
            {/* SYN arrow */}
            <div className="hw-arrow-track hw-arrow-track--up">
              <div className="hw-arrow-line hw-arrow-s2" />
              <div className="hw-packet hw-packet-s2">
                <span className="hw-packet-label">SYN</span>
                <span className="hw-packet-seq">seq=x</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-r" />
              <div className="hw-packet-desc hw-packet-desc-r">请求连接</div>
            </div>

            {/* SYN+ACK return — dashed (ACK lost) */}
            <div className="hw-arrow-track hw-arrow-track--dn">
              <div className="hw-arrow-line hw-arrow-r2-lost" />
              <div className="hw-packet hw-packet-r2-lost">
                <span className="hw-packet-label">SYN+ACK</span>
                <span className="hw-packet-seq">seq=y, ack=x+1</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-l hw-arrow-head-lost" />
              <div className="hw-packet-desc hw-packet-desc-l hw-packet-desc-lost">ACK 丢失</div>
            </div>
          </div>

          {/* Server */}
          <div className="hw-node hw-node--server">
            <div className="hw-node-box hw-node-box--wait">
              <span className="hw-node-name">服务器</span>
              <div className="hw-node-state hw-node-state--wait">SYN_RECEIVED</div>
            </div>
            <div className="hw-node-label-top">seq=y</div>
            <div className="hw-wait-timer">
              <div className="hw-timer-bar hw-timer-bar--1" />
              <div className="hw-timer-bar hw-timer-bar--2" />
              <div className="hw-timer-bar hw-timer-bar--3" />
              <div className="hw-timer-label">等待 ACK…</div>
            </div>
          </div>
        </div>

        <div className="hw-problem-card">
          <div className="hw-problem-title">服务器死等 ACK</div>
          <div className="hw-problem-desc">
            服务器发了 SYN+ACK，万一 ACK 丢了<br />
            客户端不知道，服务器永远等下去
          </div>
        </div>

        <div className="hw-corner-info">Step 2 of 3 · 两次有问题</div>
      </div>
    );
  }

  // ── step 3: THREE CORRECT — bidirectional confirmed ──
  if (step === 3) {
    return (
      <div className="hw-root hw-step-3">
        <div className="hw-step-label">三次握手 · 双向确认</div>
        <div className="hw-scene">
          {/* Client */}
          <div className="hw-node hw-node--client">
            <div className="hw-node-box hw-node-box--ok">
              <span className="hw-node-name">客户端</span>
              <div className="hw-node-state hw-node-state--ok">ESTABLISHED</div>
            </div>
            <div className="hw-node-label-top">seq=x+1</div>
          </div>

          {/* Arrow zone — three way */}
          <div className="hw-arrow-zone">
            {/* SYN */}
            <div className="hw-arrow-track hw-arrow-track--up">
              <div className="hw-arrow-line hw-arrow-s3" />
              <div className="hw-packet hw-packet-s3">
                <span className="hw-packet-label">SYN</span>
                <span className="hw-packet-seq">seq=x</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-r hw-arrow-head--muted" />
            </div>

            {/* SYN+ACK */}
            <div className="hw-arrow-track hw-arrow-track--dn">
              <div className="hw-arrow-line hw-arrow-r3" />
              <div className="hw-packet hw-packet-r3">
                <span className="hw-packet-label">SYN+ACK</span>
                <span className="hw-packet-seq">seq=y, ack=x+1</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-l hw-arrow-head--muted" />
            </div>

            {/* ACK */}
            <div className="hw-arrow-track hw-arrow-track--up hw-arrow-track--3rd">
              <div className="hw-arrow-line hw-arrow-s3-ack" />
              <div className="hw-packet hw-packet-s3-ack">
                <span className="hw-packet-label">ACK</span>
                <span className="hw-packet-seq">ack=y+1</span>
              </div>
              <div className="hw-arrow-head hw-arrow-head-r hw-arrow-head--muted" />
            </div>
          </div>

          {/* Server */}
          <div className="hw-node hw-node--server">
            <div className="hw-node-box hw-node-box--ok">
              <span className="hw-node-name">服务器</span>
              <div className="hw-node-state hw-node-state--ok">ESTABLISHED</div>
            </div>
            <div className="hw-node-label-top">seq=y+1</div>
          </div>
        </div>

        {/* Established banner */}
        <div className="hw-connected-banner">
          <div className="hw-connected-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span>连接建立 · 双向确认</span>
        </div>

        <div className="hw-confirm-row">
          <div className="hw-confirm-item">
            <span className="hw-confirm-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>客户端确认服务器能收到</span>
          </div>
          <div className="hw-confirm-item">
            <span className="hw-confirm-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>服务器确认客户端能收到</span>
          </div>
        </div>

        <div className="hw-corner-info">Step 3 of 3 · 三次刚刚好</div>
      </div>
    );
  }

  return null;
}
