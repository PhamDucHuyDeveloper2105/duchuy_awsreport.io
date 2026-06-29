import { Link } from 'react-router-dom'
import Card from '../components/Card'

const sections = [
  { path: 'ec2', label: 'EC2' },
  { path: 's3', label: 'S3' },
  { path: 'iam', label: 'IAM' },
  { path: 'rds', label: 'RDS' },
  { path: 'lambda', label: 'Lambda' },
  { path: 'api-gateway', label: 'API Gateway' },
  { path: 'cloudfront', label: 'CloudFront' },
  { path: 'cloudwatch', label: 'CloudWatch' },
  { path: 'route-53', label: 'Route 53' },
]

const AWS = () => {
  return (
    <section className="page-content aws-overview">
      <h1>AWS Internship Highlights</h1>
      <p>
        Review the core AWS services used in the internship and explore the architecture, configuration, and lessons learned for each service.
      </p>

      <div className="section-grid">
        <Card title="AWS focus areas">
          <ul>
            <li>Compute with EC2</li>
            <li>Storage with S3</li>
            <li>Security with IAM</li>
            <li>Databases with RDS</li>
            <li>Serverless with Lambda</li>
          </ul>
        </Card>
        <Card title="Architectural goals">
          <p>Build a secure, scalable, and maintainable AWS internship report architecture with automation and monitoring.</p>
        </Card>
      </div>

      <div className="aws-links">
        {sections.map((section) => (
          <Link key={section.path} to={section.path} className="aws-link-card">
            {section.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default AWS
