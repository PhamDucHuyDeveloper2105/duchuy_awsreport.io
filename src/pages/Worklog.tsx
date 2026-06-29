import Card from '../components/Card'
import Timeline from '../components/Timeline'

const Worklog = () => {
  return (
    <section className="page-content">
      <h1>Worklog</h1>
      <p>
        A summary of the weekly progress made during the internship, including hands-on learning,
        technical exploration, and reflection on key milestones.
      </p>

      <div className="section-grid">
        <Card title="Milestones">
          <ul>
            <li>Explored core AWS services and service categories.</li>
            <li>Studied cloud architecture concepts and deployment strategies.</li>
            <li>Participated in workshops and community learning events.</li>
          </ul>
        </Card>
        <Card title="Learning Focus">
          <ul>
            <li>Security and identity management</li>
            <li>Storage and compute services</li>
            <li>Monitoring, networking, and scalability</li>
          </ul>
        </Card>
      </div>

      <Timeline />
    </section>
  )
}

export default Worklog
