const TICKER = [
  "nmap",
  "burpsuite",
  "bloodhound",
  "ghidra",
  "splunk",
  "elastic",
  "sigma",
  "yara",
  "terraform",
  "kubernetes",
  "ebpf",
  "semgrep",
  "python",
  "golang",
  "aws security",
  "velociraptor",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-set" key={copy}>
            {TICKER.map((item) => (
              <span key={`${copy}-${item}`} className="ticker-item">
                {item}
                <span className="ticker-sep">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
