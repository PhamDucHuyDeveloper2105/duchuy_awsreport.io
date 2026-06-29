import Card from '../../components/Card'

const Lambda = () => {
  return (
    <section className="aws-section">
      <h1>Lambda</h1>
      <Card title="Overview">
        <p>AWS Lambda runs code without provisioning servers, enabling event-driven processing and integration.</p>
      </Card>
      <Card title="Architecture">
        <p>Built functions triggered by API Gateway and CloudWatch Events with IAM execution roles.</p>
      </Card>
      <Card title="Configuration">
        <p>Configured memory, timeout, and environment variables to optimize performance.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Keep functions lightweight and use layers for shared dependencies.</li>
          <li>Monitor cold starts and adjust memory to balance cost and latency.</li>
        </ul>
      </Card>
    </section>
  )
}

export default Lambda
