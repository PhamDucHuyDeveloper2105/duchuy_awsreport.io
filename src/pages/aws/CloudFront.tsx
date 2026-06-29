import Card from '../../components/Card'

const CloudFront = () => {
  return (
    <section className="aws-section">
      <h1>CloudFront</h1>
      <Card title="Overview">
        <p>Amazon CloudFront delivers static and dynamic content globally with low latency.</p>
      </Card>
      <Card title="Architecture">
        <p>Configured origin access identity for S3 and edge caching rules for performance.</p>
      </Card>
      <Card title="Configuration">
        <p>Used cache behaviors, SSL settings, and custom domains for secure delivery.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Cache invalidation is essential when content updates frequently.</li>
          <li>Custom error pages improve reliability for end users.</li>
        </ul>
      </Card>
    </section>
  )
}

export default CloudFront
