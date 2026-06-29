import Card from '../../components/Card'

const RDS = () => {
  return (
    <section className="aws-section">
      <h1>RDS</h1>
      <Card title="Overview">
        <p>Amazon RDS provides managed relational databases with backups, scaling, and monitoring.</p>
      </Card>
      <Card title="Architecture">
        <p>Deployed a primary DB instance inside a private subnet with automated backups and multi-AZ failover.</p>
      </Card>
      <Card title="Configuration">
        <p>Configured security groups, parameter groups, and connection strings for the application.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Pick the right DB engine and instance size for development versus production workloads.</li>
          <li>Monitor storage and CPU to prevent unexpected throttling.</li>
        </ul>
      </Card>
    </section>
  )
}

export default RDS
