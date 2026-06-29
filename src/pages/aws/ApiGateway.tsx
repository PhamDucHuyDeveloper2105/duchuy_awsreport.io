import Card from '../../components/Card'

const ApiGateway = () => {
  return (
    <section className="aws-section">
      <h1>API Gateway</h1>
      <Card title="Overview">
        <p>AWS API Gateway provides REST and HTTP endpoints for serverless and microservice workloads.</p>
      </Card>
      <Card title="Architecture">
        <p>API Gateway routes client requests to Lambda functions and backend services with authorization support.</p>
      </Card>
      <Card title="Configuration">
        <p>Defined routes, stages, and request validation to enforce contract expectations.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Use stage variables and deployments to safely promote updates.</li>
          <li>Integrate request/response mapping for consistent payload structure.</li>
        </ul>
      </Card>
    </section>
  )
}

export default ApiGateway
