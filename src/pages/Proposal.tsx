import Card from '../components/Card'

const Proposal = () => {
  return (
    <section className="page-content">
      <h1>Proposal</h1>
      <p>
        This proposal outlines the intended learning path and the practical outcomes expected from the
        internship experience.
      </p>

      <div className="section-grid">
        <Card title="Project Goals">
          <p>
            Build a solid foundation in AWS fundamentals, understand cloud service integration,
            and document the internship journey in a clear, structured report.
          </p>
        </Card>
        <Card title="Scope">
          <p>
            Cover AWS account setup, identity and access management, storage, compute, serverless
            solutions, and monitoring services.
          </p>
        </Card>
        <Card title="Approach">
          <p>
            Follow AWS best practices, study real architectural patterns, and reinforce learning through
            workshops, events, and guided hands-on practice.
          </p>
        </Card>
        <Card title="Expected Outcomes">
          <p>
            Gain practical cloud knowledge, develop stronger problem-solving skills, and produce a
            polished internship report that reflects real technical growth.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Proposal
