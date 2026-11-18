import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">04</span>
          <h2>
            experience<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
        </div>

        <div className="timeline">
          {experience.map((job, index) => (
            <article
              key={job.role}
              className="job reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="job-marker" aria-hidden="true">
                <span />
              </div>

              <div className="job-head">
                <div>
                  <h3>
                    {job.role} <span className="job-at">@ {job.org}</span>
                  </h3>
                  <span className="job-loc">{job.location}</span>
                </div>
                <span className="job-period">{job.period}</span>
              </div>

              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="chips">
                {job.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
