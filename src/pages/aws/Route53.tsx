import Card from '../../components/Card'

const Route53 = () => {
  return (
    <section className="aws-section">
      <h1>Route 53</h1>
      <Card title="Overview">
        <p>Amazon Route 53 routes DNS traffic and supports health checks for resilient applications.</p>
      </Card>
      <Card title="Architecture">
        <p>Configured hosted zones, record sets, and routing policies for application availability.</p>
      </Card>
      <Card title="Configuration">
        <p>Used DNS records and health checks to point domains to CloudFront and API Gateway endpoints.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Keep DNS TTL short during active deployments for faster rollout.</li>
          <li>Use alias records for AWS-managed endpoints to simplify maintenance.</li>
        </ul>
      </Card>
    </section>
  )
}

export default Route53
