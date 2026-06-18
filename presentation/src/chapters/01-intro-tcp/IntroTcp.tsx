import { useEffect, useRef } from "react";
import "./IntroTcp.css";
import { narrations } from "./narrations";

export default function IntroTcp({ step }: { step: number }) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Drive SVG animations via CSS classes
  useEffect(() => {
    if (!svgRef.current) return;
    const el = svgRef.current;

    // Reset all
    el.classList.remove("it-svg--s1", "it-svg--s2", "it-svg--s3");

    if (step === 1) el.classList.add("it-svg--s1");
    if (step >= 1 && step <= 2) el.classList.add("it-svg--s2");
    if (step >= 2) el.classList.add("it-svg--s3");
  }, [step]);

  if (step === 0) {
    return (
      <div className="it-root it-step-0">
        <div className="it-hero-wrap">
          <span className="it-hero-tcp">TCP</span>
          <span className="it-hero-sub">三次握手 和 四次挥手</span>
        </div>
        <div className="it-corner-label">Protocol · Transmission Control</div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="it-root it-step-1">
        <div className="it-section-label">// TCP 是什么</div>
        <div className="it-delivery-scene">
          {/* Left computer */}
          <div className="it-computer it-computer--left">
            <div className="it-monitor">
              <div className="it-screen">
                <span className="it-screen-label">CLIENT</span>
                <div className="it-app-window">
                  <div className="it-app-bar" />
                  <div className="it-app-content">
                    <div className="it-code-line" />
                    <div className="it-code-line it-code-line--short" />
                    <div className="it-code-line" />
                  </div>
                </div>
              </div>
              <div className="it-stand" />
              <div className="it-base" />
            </div>
          </div>

          {/* Delivery arrow */}
          <div className="it-delivery-wrap">
            <div className="it-package it-package--sending">
              <div className="it-package-box">
                <span className="it-package-label">DATA</span>
              </div>
              <div className="it-package-trail" />
            </div>
            <div className="it-arrow-track">
              <div className="it-arrow-line" />
              <div className="it-arrow-head" />
            </div>
            <div className="it-protocol-tag">TCP</div>
          </div>

          {/* Right computer */}
          <div className="it-computer it-computer--right">
            <div className="it-monitor">
              <div className="it-screen">
                <span className="it-screen-label">SERVER</span>
                <div className="it-server-rack">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="it-rack-unit" />
                  ))}
                </div>
              </div>
              <div className="it-stand" />
              <div className="it-base" />
            </div>
          </div>
        </div>

        <div className="it-metaphor-label">
          <svg className="it-package-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
          <span>像快递公司一样</span>
          <span className="it-metaphor-sub">保证数据可靠送达</span>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="it-root it-step-2">
        <div className="it-section-label">// 核心特性</div>
        <div className="it-features-row">
          <div className="it-feature-card it-feature-card--1">
            <div className="it-card-number">01</div>
            <div className="it-card-title">可靠</div>
            <div className="it-card-desc">丢包？重来</div>
            <div className="it-card-rule" />
            <div className="it-card-diagram">
              <div className="it-packet it-packet--lost">
                <span>PKT</span>
              </div>
              <div className="it-packet it-packet--retry">
                <span>RETRY</span>
              </div>
            </div>
          </div>

          <div className="it-feature-card it-feature-card--2">
            <div className="it-card-number">02</div>
            <div className="it-card-title">有序</div>
            <div className="it-card-desc">乱序？重排</div>
            <div className="it-card-rule" />
            <div className="it-card-diagram">
              <div className="it-seq-flow">
                <div className="it-seq-item it-seq-3">3</div>
                <div className="it-seq-item it-seq-1">1</div>
                <div className="it-seq-item it-seq-2">2</div>
                <span className="it-seq-arrow">→</span>
                <div className="it-seq-item it-seq-1 it-seq-ok">1</div>
                <div className="it-seq-item it-seq-2 it-seq-ok">2</div>
                <div className="it-seq-item it-seq-3 it-seq-ok">3</div>
              </div>
            </div>
          </div>

          <div className="it-feature-card it-feature-card--3">
            <div className="it-card-number">03</div>
            <div className="it-card-title">不丢失</div>
            <div className="it-card-desc">确认机制</div>
            <div className="it-card-rule" />
            <div className="it-card-diagram">
              <div className="it-ack-flow">
                <div className="it-ack-sender">
                  <span>SEND</span>
                  <div className="it-ack-bar it-ack-bar--s1" />
                  <div className="it-ack-bar it-ack-bar--s2" />
                  <div className="it-ack-bar it-ack-bar--s3" />
                </div>
                <div className="it-ack-line">
                  <div className="it-ack-tick it-ack-tick--1" />
                  <div className="it-ack-tick it-ack-tick--2" />
                  <div className="it-ack-tick it-ack-tick--3" />
                </div>
                <div className="it-ack-receiver">
                  <span>ACK</span>
                  <div className="it-ack-bar it-ack-bar--a1" />
                  <div className="it-ack-bar it-ack-bar--a2" />
                  <div className="it-ack-bar it-ack-bar--a3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-osilayer-tag">
          位于 OSI 七层模型 · 传输层（第四层）
        </div>
      </div>
    );
  }

  return null;
}
