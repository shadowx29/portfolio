import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-num">02</span>
          <h2>
            skills<span className="dot">.</span>
          </h2>
          <span className="sec-line" />
          <span className="sec-note">four disciplines, one threat model</span>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.id}
              className="skill-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="skill-head">
                <span className="card-index">[{group.index}]</span>
                <h3>{group.title}</h3>
              </div>
              <p className="skill-blurb">{group.blurb}</p>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-line">
                      <span>{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div
                      className="skill-bar"
                      style={{ ["--w" as string]: `${skill.level}%` }}
                      role="presentation"
                    >
                      <span />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="chips">
                {group.tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
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
