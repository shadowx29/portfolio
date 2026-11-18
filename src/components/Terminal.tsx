import { useEffect, useState } from "react";

type Line = { kind: "cmd" | "out" | "ok" | "warn" | "dim"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "shadowx29" },
  { kind: "cmd", text: "cat /etc/role.conf" },
  { kind: "out", text: "cybersecurity_engineer = true" },
  { kind: "out", text: "focus = [offensive, detection, cloud]" },
  { kind: "cmd", text: "./engage.sh --scope authorized" },
  { kind: "dim", text: "  [*] loading recon modules ... done" },
  { kind: "ok", text: "  [+] 120+ engagements, 14 CVEs disclosed" },
  { kind: "ok", text: "  [+] trust boundary verified, nothing exposed" },
  { kind: "warn", text: "  [!] coffee reserves low" },
];

const CLASS: Record<Line["kind"], string> = {
  cmd: "t-cmd",
  out: "t-out",
  ok: "t-ok",
  warn: "t-warn",
  dim: "t-dim",
};

export default function Terminal() {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = SCRIPT[line];
    if (!current) return;

    if (char < current.text.length) {
      const timer = window.setTimeout(() => setChar((c) => c + 1), current.kind === "cmd" ? 34 : 9);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLine((l) => l + 1);
      setChar(0);
    }, current.kind === "cmd" ? 260 : 120);
    return () => window.clearTimeout(timer);
  }, [line, char, reduced]);

  const finished = line >= SCRIPT.length;
  const active = SCRIPT[line];

  return (
    <div className="terminal" aria-label="Terminal session for shadowx29">
      <div className="terminal-bar">
        <span className="terminal-dots">
          <i className="dot red" />
          <i className="dot amber" />
          <i className="dot green" />
        </span>
        <span className="terminal-title">root@shadowx29: ~</span>
        <span className="terminal-badge">tty0</span>
      </div>

      <div className="terminal-body">
        {reduced ? (
          SCRIPT.map((entry, i) => (
            <p key={i} className={CLASS[entry.kind]}>
              {entry.kind === "cmd" && <span className="t-prompt">$ </span>}
              {entry.text}
            </p>
          ))
        ) : (
          <>
            {SCRIPT.slice(0, line).map((entry, i) => (
              <p key={i} className={CLASS[entry.kind]}>
                {entry.kind === "cmd" && <span className="t-prompt">$ </span>}
                {entry.text}
              </p>
            ))}
            {active && (
              <p className={CLASS[active.kind]}>
                {active.kind === "cmd" && <span className="t-prompt">$ </span>}
                {active.text.slice(0, char)}
                <span className="caret" />
              </p>
            )}
          </>
        )}
        {finished && (
          <p className="t-cmd">
            <span className="t-prompt">$ </span>
            <span className="caret" />
          </p>
        )}
      </div>

      <div className="terminal-foot">
        <span className="live-dot" /> session encrypted · tls 1.3
      </div>
    </div>
  );
}
