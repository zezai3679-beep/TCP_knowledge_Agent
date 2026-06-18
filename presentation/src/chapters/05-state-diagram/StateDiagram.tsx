import "./StateDiagram.css";

const CLIENT_STATES = [
  "CLOSED",
  "SYN_SENT",
  "ESTABLISHED",
  "FIN_WAIT_1",
  "FIN_WAIT_2",
  "TIME_WAIT",
  "CLOSED",
];

const SERVER_STATES = [
  "LISTEN",
  "SYN_RECEIVED",
  "ESTABLISHED",
  "CLOSE_WAIT",
  "LAST_ACK",
  "CLOSED",
];

export default function StateDiagram({ step }: { step: number }) {

  return (
    <div className="sd-root">
      {step === 0 && (
        <div className="sd-title">
          <h1 className="sd-hero-title">状态转换</h1>
          <p className="sd-subtitle">TCP 连接的生命周期</p>
        </div>
      )}

      {step === 1 && (
        <div className="sd-section">
          <h2 className="sd-section-title">客户端状态机</h2>
          <div className="sd-flow sd-client-flow">
            {CLIENT_STATES.map((state, i) => (
              <div key={state} className="sd-flow-item">
                <div
                  className={`sd-box sd-box--state ${
                    i <= 6 ? "sd-box--lit" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  {state}
                </div>
                {i < CLIENT_STATES.length - 1 && (
                  <span className="sd-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="sd-section">
          <h2 className="sd-section-title">服务器状态机</h2>
          <div className="sd-flow sd-server-flow">
            {SERVER_STATES.map((state, i) => (
              <div key={state} className="sd-flow-item">
                <div
                  className={`sd-box sd-box--state ${
                    i <= 5 ? "sd-box--lit" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  {state}
                </div>
                {i < SERVER_STATES.length - 1 && (
                  <span className="sd-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="sd-section">
          <div className="sd-terminal-wrap">
            <div className="sd-terminal">
              <div className="sd-terminal-bar">
                <span className="sd-terminal-dot" />
                <span className="sd-terminal-dot" />
                <span className="sd-terminal-dot" />
                <span className="sd-terminal-title">Wireshark</span>
              </div>
              <div className="sd-terminal-body">
                <div className="sd-terminal-cmd">
                  <span className="sd-prompt">$</span>{" "}
                  <span className="sd-cmd-text">tcp.flags.syn==1</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">No. Time Source Destination Protocol
Info</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">1 0.000 192.168.1.100 192.168.1.200 TCP 80 → 443 [SYN] Seq=0</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">2 0.021 192.168.1.200 192.168.1.100 TCP 443 → 80 [SYN, ACK] Seq=0 Ack=1</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">3 0.022 192.168.1.100 192.168.1.200 TCP 80 → 443 [ACK] Seq=1 Ack=1</span>
                </div>
                <div className="sd-terminal-cmd sd-terminal-cmd--gap">
                  <span className="sd-prompt">$</span>{" "}
                  <span className="sd-cmd-text">tcp.flags.fin==1</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">4 5.123 192.168.1.100 192.168.1.200 TCP 80 → 443 [FIN, ACK] Seq=1 Ack=1</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">5 5.145 192.168.1.200 192.168.1.100 TCP 443 → 80 [ACK] Seq=1 Ack=2</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">6 5.200 192.168.1.200 192.168.1.100 TCP 443 → 80 [FIN, ACK] Seq=1 Ack=2</span>
                </div>
                <div className="sd-terminal-output">
                  <span className="sd-mono">7 5.220 192.168.1.100 192.168.1.200 TCP 80 → 443 [ACK] Seq=2 Ack=2</span>
                </div>
                <div className="sd-terminal-cursor">_</div>
              </div>
            </div>
            <p className="sd-tool-label">Wireshark · 免费抓包工具</p>
          </div>
        </div>
      )}
    </div>
  );
}
