import { useState } from "react";

const SOCIALS = [
  { label: "github", value: "github.com/shadowx29", href: "https://github.com/shadowx29" },
  { label: "x", value: "x.com/shadowx29", href: "https://x.com/shadowx29" },
  { label: "linkedin", value: "in/shadowx29", href: "https://www.linkedin.com/in/shadowx29" },
  { label: "hackthebox", value: "app.hackthebox.com/shadowx29", href: "https://app.hackthebox.com/profile/shadowx29" },
];

const EMAIL = "shadowx29@proton.me";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">06</span>
          <h2>
            contact<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
        </div>

        <div className="contact-panel reveal">
          <div className="contact-corners" aria-hidden="true" />
          <p className="contact-kicker">// channel open</p>
          <h3>
            let&apos;s secure <span className="hl">something</span>.
          </h3>
          <p className="contact-copy">
            Pentest scoping, red team exercises, detection reviews or a second pair of eyes on an
            architecture diagram. Tell me the threat you are worried about and I will tell you how
            I would attack it.
          </p>

          <div className="contact-actions">
            <button type="button" className="btn btn-primary" onClick={copyEmail}>
              <span aria-live="polite">{copied ? "copied to clipboard" : EMAIL}</span>
              <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
                {copied ? (
                  <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                ) : (
                  <>
                    <rect x="5" y="5" width="8" height="8" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M3.2 10.5V4.4c0-.7.5-1.2 1.2-1.2h6.1" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </>
                )}
              </svg>
            </button>
            <a className="btn btn-ghost" href={`mailto:${EMAIL}?subject=Security%20engagement`}>
              open mail client
            </a>
          </div>

          <div className="socials">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social">
                <span className="social-label">{social.label}</span>
                <span className="social-value">{social.value}</span>
                <span className="social-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="pgp">
            <span className="pgp-label">pgp fingerprint</span>
            <code>9F2A 6C41 D8E0 29B7 5A13 04CF 7E12 88D1 A60F 392B</code>
          </div>
        </div>
      </div>
    </section>
  );
}
