import Card from '../components/Card'

const Events = () => {
  return (
    <section className="page-content">
      <h1>Events Participated</h1>
      <p>
        During the internship, I had the opportunity to join several AWS-related events that broadened my
        understanding of the cloud community and helped connect theory with practice.
      </p>

      <div className="section-grid">
        <Card title="Community Sessions">
          <ul>
            <li>AWS re:Invent preparation discussions</li>
            <li>Cloud security and compliance workshop</li>
            <li>Serverless architecture lab</li>
          </ul>
        </Card>
        <Card title="Team Activities">
          <p>
            Participated in weekly brown bags, internal demos, and mentor-led review sessions that
            strengthened collaboration and technical communication.
          </p>
        </Card>
        <Card title="Takeaways">
          <p>
            These events exposed me to AWS operational culture, peer learning, and the importance of
            architecture review in real-world deployments.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Events
