import Card from '../components/Card'

const Evaluation = () => {
  return (
    <section className="page-content">
      <h1>Self-Evaluation</h1>
      <p>
        This internship has been a strong step forward in my technical growth, especially in understanding
        how AWS services fit into real-world solutions.
      </p>

      <div className="section-grid">
        <Card title="Strengths">
          <ul>
            <li>Improved understanding of cloud architecture</li>
            <li>Stronger teamwork and communication</li>
            <li>More confidence in AWS service design</li>
          </ul>
        </Card>
        <Card title="Growth Areas">
          <ul>
            <li>Continue learning security automation</li>
            <li>Practice cost optimization strategies</li>
            <li>Build deeper application deployment skills</li>
          </ul>
        </Card>
        <Card title="Next Steps">
          <p>
            Maintain a continuous learning roadmap and apply AWS best practices in future projects and
            personal experiments.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Evaluation
