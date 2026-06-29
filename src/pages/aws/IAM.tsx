import Card from '../../components/Card'

const IAM = () => {
  return (
    <section className="aws-section">
      <h1>IAM</h1>
      <Card title="Overview">
        <p>IAM manages identities, permissions, and secure access to AWS services across the account.</p>
      </Card>
      <Card title="Architecture">
        <p>Users, groups, roles, and policies are organized to minimize privileges with role delegation.</p>
      </Card>
      <Card title="Configuration">
        <p>Implemented least-privilege policies, service roles, and MFA for administrative access.</p>
      </Card>
      <Card title="Lessons learned">
        <ul>
          <li>Use IAM roles for services instead of long-lived credentials.</li>
          <li>Review managed policies carefully before attaching them.</li>
        </ul>
      </Card>
    </section>
  )
}

export default IAM
