import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">03</span>
          <h2>
            projects<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
          <a className="sec-link" href="https://github.com/shadowx29" target="_blank" rel="noreferrer">
            github.com/shadowx29 ↗
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project ${project.featured ? "featured" : ""} reveal`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="project-top">
                <span className="card-index">// {project.index}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <h3>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-metric">
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>

              <div className="project-bottom">
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                    <path
                      d="M5 3h8v8M13 3L3.5 12.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}

          <article className="project project-cta reveal">
            <span className="card-index">// more</span>
            <h3>Research &amp; write-ups</h3>
            <p className="project-desc">
              CVE breakdowns, detection rule packs and lab notes. New posts land when something
              is worth documenting, not on a content calendar.
            </p>
            <a className="btn btn-ghost small" href="https://github.com/shadowx29" target="_blank" rel="noreferrer">
              browse the archive
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
