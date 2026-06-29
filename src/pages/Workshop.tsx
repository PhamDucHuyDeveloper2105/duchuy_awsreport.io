import Card from '../components/Card'

const Workshop = () => {
  return (
    <section className="page-content">
      <h1>Workshop</h1>
      <p>
        The workshops during the internship were especially valuable because they combined practical
        labs with conceptual explanations of how AWS services work together.
      </p>

      <div className="section-grid">
        <Card title="Topics Covered">
          <ul>
            <li>Cloud fundamentals and core AWS services</li>
            <li>Infrastructure as code and automation</li>
            <li>Security best practices and monitoring</li>
          </ul>
        </Card>
        <Card title="Hands-on Labs">
          <p>
            Built VPCs, deployed compute resources, and configured serverless APIs using real AWS tools
            and workflows.
          </p>
        </Card>
        <Card title="Reflection">
          <p>
            These sessions helped turn abstract cloud concepts into practical skills and strengthened my
            understanding of how to approach real deployment scenarios.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Workshop
