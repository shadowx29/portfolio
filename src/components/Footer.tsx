export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-brand">shadowx29</span>
          <span className="footer-copy">© {new Date().getFullYear()} · all rights reserved</span>
        </div>

        <div className="footer-mid">
          <span>built with bun + react</span>
          <span className="footer-sep">·</span>
          <span>no cookies, no trackers</span>
        </div>

        <a className="footer-top" href="#top">
          back to top <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
