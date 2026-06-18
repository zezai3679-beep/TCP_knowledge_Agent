import "./Summary.css";

export default function Summary({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="sm-root sm-step-0">
        <div className="sm-takeaway-wrap">
          <div className="sm-takeaway-line">
            <span className="sm-takeaway-text">三次握手</span>
            <span className="sm-takeaway-sub">确认双方收发能力，建立可靠连接</span>
          </div>
          <div className="sm-divider" />
          <div className="sm-takeaway-line">
            <span className="sm-takeaway-text">四次挥手</span>
            <span className="sm-takeaway-sub">确保数据传完，优雅关闭连接</span>
          </div>
        </div>
        <div className="sm-corner-tag">TCP · 核心机制</div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="sm-root sm-step-1">
        <div className="sm-golden-wrap">
          <div className="sm-golden-text">
            搞懂这两个过程
          </div>
          <div className="sm-golden-sub">
            你对TCP的理解就超过大多数人了
          </div>
        </div>
        <div className="sm-corner-tag">完</div>
      </div>
    );
  }

  return null;
}
