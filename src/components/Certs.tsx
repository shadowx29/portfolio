import { certifications } from "../data";

export default function Certs() {
  return (
    <section className="section" id="certs">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">05</span>
          <h2>
            certs<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
          <span className="sec-note">verified · renewed on cycle</span>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.code}
              className="cert reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="cert-top">
                <span className="cert-code">{cert.code}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
              <p className="cert-name">{cert.name}</p>
              <div className="cert-foot">
                <span>{cert.issuer}</span>
                <span className="cert-verified">
                  <span className="live-dot" /> verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
