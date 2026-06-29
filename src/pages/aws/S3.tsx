import Card from '../../components/Card'

const S3 = () => {
  return (
    <section className="aws-section">
      <h1>S3</h1>
      <Card title="Overview">
        <p>Amazon S3 stores objects securely with versioning, lifecycle rules, and static site hosting options.</p>
      </Card>
      <Card title="Architecture">
        <p>Data is stored across multiple Availability Zones with durability and eventual consistency.</p>
      </Card>
      <Card title="Configuration">
        <p>Used bucket policies, ACLs, server-side encryption, and lifecycle transitions to Glacier.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Enable MFA delete and encryption for sensitive buckets.</li>
          <li>Keep public access blocked unless required for static content.</li>
        </ul>
      </Card>
    </section>
  )
}

export default S3
