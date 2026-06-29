import Card from '../../components/Card'

const CloudWatch = () => {
  return (
    <section className="aws-section">
      <h1>CloudWatch</h1>
      <Card title="Overview">
        <p>CloudWatch monitors logs, metrics, and alarms to help operate AWS workloads effectively.</p>
      </Card>
      <Card title="Architecture">
        <p>Collected metrics from EC2, RDS, and Lambda, and routed logs to CloudWatch Logs groups.</p>
      </Card>
      <Card title="Configuration">
        <p>Defined dashboards, alarms, and log retention rules for operational visibility.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Set thresholds carefully to avoid alert fatigue.</li>
          <li>Use custom metrics when built-in metrics are not enough.</li>
        </ul>
      </Card>
    </section>
  )
}

export default CloudWatch
