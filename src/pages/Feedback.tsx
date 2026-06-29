import Card from '../components/Card'

const Feedback = () => {
  return (
    <section className="page-content">
      <h1>Sharing & Feedback</h1>
      <p>
        Feedback played an important role in improving my understanding and refining how I approached
        both technical tasks and collaborative work.
      </p>

      <div className="section-grid">
        <Card title="Mentor Feedback">
          <p>
            Received guidance on architecture decisions, coding quality, and selecting the most suitable
            AWS services for different scenarios.
          </p>
        </Card>
        <Card title="Peer Sharing">
          <p>
            Shared progress updates and received constructive suggestions that helped improve my work and
            thinking process.
          </p>
        </Card>
        <Card title="Key Lessons">
          <ul>
            <li>Document design decisions clearly.</li>
            <li>Communicate dependencies early.</li>
            <li>Iterate quickly with feedback loops.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default Feedback
