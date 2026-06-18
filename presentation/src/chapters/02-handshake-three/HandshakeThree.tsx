import "./HandshakeThree.css";

export default function HandshakeThree({ step }: { step: number }) {
  // ── step 0: cold open — title + hook ──
  if (step === 0) {
    return (
      <div className="ht-root ht-step-0">
        <div className="ht-title-block">
          <div className="ht-section-tag">// TCP · 建立连接</div>
          <div className="ht-main-title">三次握手</div>
          <div className="ht-hook-line">
            <span className="ht-hook-q">?</span>
            <span className="ht-hook-text">为什么要握手？</span>
          </div>
        </div>
        <div className="ht-corner-info">Three-way Handshake · TCP</div>
      </div>
    );
  }

  // ── step 1: SYN sent ──
  if (step === 1) {
    return (
      <div className="ht-root ht-step-1">
        <div className="ht-step-label">第一步</div>
        <div className="ht-scene">
          {/* Client */}
          <div className="ht-node ht-node--client">
            <div className="ht-node-box">
              <span className="ht-node-name">客户端</span>
              <div className="ht-node-state">CLOSED</div>
            </div>
            <div className="ht-node-label-top">seq=x</div>
          </div>

          {/* Arrow to server */}
          <div className="ht-arrow-zone">
            <div className="ht-arrow-line ht-arrow-s1" />
            <div className="ht-packet ht-packet-s1">
              <span className="ht-packet-label">SYN</span>
              <span className="ht-packet-seq">seq=x</span>
            </div>
            <div className="ht-arrow-head ht-arrow-head-r" />
            <div className="ht-packet-desc ht-packet-desc-r">请求建立连接</div>
          </div>

          {/* Server */}
          <div className="ht-node ht-node--server">
            <div className="ht-node-box">
              <span className="ht-node-name">服务器</span>
              <div className="ht-node-state">LISTEN</div>
            </div>
          </div>
        </div>
        <div className="ht-explain-bar">
          <span className="ht-exp-icon">→</span>
          <span>客户端发送 SYN，请求同步序列号</span>
        </div>
        <div className="ht-corner-info">Step 1 of 3 · Client → Server</div>
      </div>
    );
  }

  // ── step 2: SYN+ACK returned ──
  if (step === 2) {
    return (
      <div className="ht-root ht-step-2">
        <div className="ht-step-label">第二步</div>
        <div className="ht-scene">
          {/* Client */}
          <div className="ht-node ht-node--client">
            <div className="ht-node-box">
              <span className="ht-node-name">客户端</span>
              <div className="ht-node-state">SYN_SENT</div>
            </div>
            <div className="ht-node-label-top">seq=x</div>
          </div>

          {/* Bidirectional arrows */}
          <div className="ht-arrow-zone">
            {/* Return arrow - SYN+ACK */}
            <div className="ht-arrow-return">
              <div className="ht-arrow-line ht-arrow-r2" />
              <div className="ht-packet ht-packet-r2">
                <span className="ht-packet-label">SYN+ACK</span>
                <span className="ht-packet-seq">seq=y, ack=x+1</span>
              </div>
              <div className="ht-arrow-head ht-arrow-head-l" />
              <div className="ht-packet-desc ht-packet-desc-l">同意 + 确认收到</div>
            </div>
            {/* Original SYN fading */}
            <div className="ht-packet ht-packet-s1-fade">
              <span className="ht-packet-label">SYN</span>
              <span className="ht-packet-seq">seq=x</span>
            </div>
          </div>

          {/* Server */}
          <div className="ht-node ht-node--server">
            <div className="ht-node-box">
              <span className="ht-node-name">服务器</span>
              <div className="ht-node-state">SYN_RECEIVED</div>
            </div>
            <div className="ht-node-label-top">seq=y</div>
          </div>
        </div>
        <div className="ht-explain-bar">
          <span className="ht-exp-icon">←</span>
          <span>服务器回复 SYN+ACK，携带自己的初始序列号</span>
        </div>
        <div className="ht-corner-info">Step 2 of 3 · Server → Client</div>
      </div>
    );
  }

  // ── step 3: ACK sent, connection established ──
  if (step === 3) {
    return (
      <div className="ht-root ht-step-3">
        <div className="ht-step-label">第三步</div>
        <div className="ht-scene">
          {/* Client */}
          <div className="ht-node ht-node--client">
            <div className="ht-node-box ht-node-box--ok">
              <span className="ht-node-name">客户端</span>
              <div className="ht-node-state ht-node-state--ok">ESTABLISHED</div>
            </div>
            <div className="ht-node-label-top">seq=x+1</div>
          </div>

          {/* Final ACK arrow */}
          <div className="ht-arrow-zone">
            <div className="ht-arrow-line ht-arrow-s3" />
            <div className="ht-packet ht-packet-s3">
              <span className="ht-packet-label">ACK</span>
              <span className="ht-packet-seq">ack=y+1</span>
            </div>
            <div className="ht-arrow-head ht-arrow-head-r" />
            <div className="ht-packet-desc ht-packet-desc-r">确认收到</div>
          </div>

          {/* Server */}
          <div className="ht-node ht-node--server">
            <div className="ht-node-box ht-node-box--ok">
              <span className="ht-node-name">服务器</span>
              <div className="ht-node-state ht-node-state--ok">ESTABLISHED</div>
            </div>
            <div className="ht-node-label-top">seq=y+1</div>
          </div>
        </div>

        {/* Connection established banner */}
        <div className="ht-connected-banner">
          <div className="ht-connected-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span>连接建立完成</span>
        </div>

        <div className="ht-explain-bar">
          <span className="ht-exp-icon">→</span>
          <span>客户端发送 ACK，双方确认收发能力正常</span>
        </div>
        <div className="ht-corner-info">Step 3 of 3 · 双方确认</div>
      </div>
    );
  }

  return null;
}