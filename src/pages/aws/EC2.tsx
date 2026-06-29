import Card from '../../components/Card'

const EC2 = () => {
  return (
    <section className="aws-section">
      <h1>EC2</h1>
      <Card title="Overview">
        <p>Amazon EC2 provides resizable compute capacity in the cloud for hosting applications and services.</p>
      </Card>
      <Card title="Architecture">
        <p>Instances are launched inside a VPC, using security groups, IAM roles, and EBS-backed storage.</p>
      </Card>
      <Card title="Configuration">
        <p>Configured instance types, AMI selection, key pairs, and auto-scaling policies.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Choose correct instance families for workload and cost.</li>
          <li>Use tags consistently for tracking resources.</li>
        </ul>
      </Card>
    </section>
  )
}

export default EC2
