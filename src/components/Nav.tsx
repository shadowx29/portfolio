import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "about", num: "01" },
  { id: "skills", label: "skills", num: "02" },
  { id: "projects", label: "projects", num: "03" },
  { id: "experience", label: "experience", num: "04" },
  { id: "certs", label: "certs", num: "05" },
  { id: "contact", label: "contact", num: "06" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );

    const hero = document.getElementById("top");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(entry.target.id === "top" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    if (hero) observer.observe(hero);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="shadowx29 home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M12 2.5l8 2.8v6.6c0 5-3.4 8-8 9.6-4.6-1.6-8-4.6-8-9.6V5.3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M8.6 11.9l2.4 2.5 4.6-4.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <span className="brand-name">shadowx29</span>
          <span className="brand-cursor" aria-hidden="true">
            _
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "true" : undefined}
            >
              <span className="nav-num">{link.num}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-meta">
          <span className="status-pill">
            <span className="live-dot" />
            available
          </span>
          <button
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
            <span className="nav-num">{link.num}.</span> {link.label}
          </a>
        ))}
        <a className="mobile-mail" href="mailto:shadowx29.hack@outlook.com">
          shadowx29.hack@outlook.com
        </a>
      </div>
    </header>
  );
}
