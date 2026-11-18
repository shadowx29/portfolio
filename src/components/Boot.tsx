import { useEffect, useState } from "react";

const BOOT_LINES = [
  "loading secure shell ...",
  "mounting /dev/portfolio ...",
  "verifying integrity signature ... ok",
  "establishing encrypted channel ... tls 1.3",
  "access granted",
];

export default function Boot() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }
    const fade = window.setTimeout(() => setDone(true), 1600);
    const remove = window.setTimeout(() => setHidden(true), 2200);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`boot ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="boot-inner">
        <div className="boot-brand">
          shadow<span>x</span>29
        </div>
        <div className="boot-lines">
          {BOOT_LINES.map((line, index) => (
            <p key={line} style={{ animationDelay: `${index * 180}ms` }}>
              <span>[ ok ]</span> {line}
            </p>
          ))}
        </div>
        <div className="boot-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
