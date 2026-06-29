import Card from '../components/Card'

const Report = () => {
  return (
    <section className="page-content">
      <h1>Full Internship Report</h1>
      <p>
        This section presents the main findings of the internship, highlighting the experiences,
        lessons learned, and the practical understanding gained in cloud computing.
      </p>

      <div className="section-grid">
        <Card title="Key Findings">
          <ul>
            <li>Cloud services can be learned effectively through hands-on exploration.</li>
            <li>Security and architecture design are essential in every AWS solution.</li>
            <li>Continuous reflection helps turn experience into lasting knowledge.</li>
          </ul>
        </Card>
        <Card title="Takeaways">
          <p>
            The internship strengthened my confidence in working with modern cloud technologies and
            helped shape a clearer direction for future learning in AI and cloud engineering.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Report
