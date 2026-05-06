interface TeamMember {
  name: string
  title: string
  email: string
  photo?: string
}

const team: TeamMember[] = [
  {
    name: 'Steven Stevenson',
    title: 'Principal',
    email: 'steven@sweetashome.co',
  },
  {
    name: 'Anne Stevenson',
    title: 'Founder',
    email: 'anne@sweetashome.co',
  },
  {
    name: 'David Schripsema',
    title: 'Director of Operations',
    email: 'david@sweetashome.co',
  },
]

function AvatarPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="38" r="18" fill="rgba(201,162,39,0.25)" />
      <ellipse cx="50" cy="80" rx="28" ry="18" fill="rgba(201,162,39,0.15)" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <div className="about__intro">
          <span className="section-label">The Team</span>
          <h2 className="section-title">People Behind the Work</h2>
          <div className="gold-rule" />
          <p>
            We are a small, hands-on family team with decades of combined experience in business
            operations, real estate investment, fiduciary management, and entrepreneurship across
            the Pacific Northwest and beyond.
          </p>
        </div>

        <div className="about__grid">
          {team.map((member) => (
            <div key={member.email} className="about__card">
              <div className="about__avatar">
                {member.photo
                  ? <img src={member.photo} alt={member.name} />
                  : <AvatarPlaceholder />}
              </div>
              <h3 className="about__name">{member.name}</h3>
              <p className="about__title">{member.title}</p>
              <div className="about__rule" />
              <a className="about__email" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
