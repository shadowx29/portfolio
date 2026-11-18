import { useEffect, useState } from "react";
import Terminal from "./Terminal";
import MatrixRain from "./MatrixRain";
import { roles, stats } from "../data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="top">
      <MatrixRain />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-box">[</span> secure systems · offensive mindset{" "}
            <span className="eyebrow-box">]</span>
          </div>

          <h1 className="glitch" data-text="shadowx29">
            shadowx29
          </h1>

          <p className="hero-role">
            <span className="role-arrow">&gt;</span>{" "}
            <span key={roleIndex} className="role">
              {roles[roleIndex]}
            </span>
            <span className="caret" />
          </p>

          <p className="hero-lede">
            I break systems on purpose, then build the telemetry that catches the next person
            trying to do it. Seven years across red teams, SOC floors and cloud security
            architecture.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <span>./view_projects</span>
              <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
                <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#contact">
              <span>initiate_contact</span>
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-terminal">
          <Terminal />
          <div className="terminal-note">
            <span>//</span> all activity shown is authorised, scoped and logged
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>scroll</span>
        <i />
      </div>
    </section>
  );
}
