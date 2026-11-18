import { principles } from "../data";

const DOSSIER = [
  { key: "alias", value: "shadowx29" },
  { key: "role", value: "cybersecurity engineer" },
  { key: "focus", value: "red team / blue team / cloud" },
  { key: "location", value: "remote · UTC+2" },
  { key: "clearance", value: "eligible" },
  { key: "status", value: "open to engagements" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">01</span>
          <h2>
            about<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead">
              I am a cybersecurity engineer who spends most of his time on the seam between
              offence and defence.
            </p>
            <p>
              My work starts with adversary simulation: web and API pentests, Active Directory
              attack paths, cloud identity abuse. It ends with detection engineering, because a
              finding that never becomes a control is just paperwork.
            </p>
            <p>
              I have led engagements for fintech, healthcare and critical infrastructure teams,
              disclosed 14 CVEs, and built the tooling my own red team now uses. Outside of
              client work I maintain open-source security tooling and mentor engineers working
              toward their OSCP.
            </p>

            <ul className="principles">
              {principles.map((principle) => (
                <li key={principle}>
                  <span className="principles-mark" aria-hidden="true">
                    ▸
                  </span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <aside className="dossier reveal" aria-label="Profile dossier">
            <div className="dossier-head">
              <span>// profile.dossier</span>
              <span className="dossier-tag">read-only</span>
            </div>
            <dl className="dossier-rows">
              {DOSSIER.map((row) => (
                <div key={row.key} className="dossier-row">
                  <dt>{row.key}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="dossier-foot">
              <span className="dossier-label">gpg · ed25519</span>
              <code>9F2A 6C41 D8E0 29B7 5A13  04CF 7E12 88D1 A60F 392B</code>
            </div>
            <div className="dossier-corners" aria-hidden="true" />
          </aside>
        </div>
      </div>
    </section>
  );
}
