import Card from '../components/Card'

const About = () => {
  return (
    <section className="page-content">
      <h1>About This Report</h1>
      <p>
        This internship report captures my practical experience with AWS services, cloud architecture,
        and the learning process during the FCAJ Cloud Internship program.
      </p>

      <div className="section-grid">
        <Card title="Purpose">
          <p>
            The goal of this report is to document the knowledge gained, the activities completed,
            and the reflections that shaped my understanding of cloud computing.
          </p>
        </Card>
        <Card title="Focus Areas">
          <ul>
            <li>AWS core services and solutions</li>
            <li>Cloud architecture and design principles</li>
            <li>Hands-on workshops and practical learning</li>
            <li>Self-evaluation and future growth</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default About
