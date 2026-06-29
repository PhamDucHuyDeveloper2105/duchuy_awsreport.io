import { motion } from 'framer-motion'

interface TimelineItem {
  period: string
  title: string
  details: string
}

const items: TimelineItem[] = [
  {
    period: 'Week 1',
    title: 'AWS account setup',
    details: 'Created IAM users, configured MFA, and established secure access controls.',
  },
  {
    period: 'Week 2',
    title: 'VPC and storage',
    details: 'Built VPC infrastructure, public/private subnets, and S3 bucket policies.',
  },
  {
    period: 'Week 3',
    title: 'Database and delivery',
    details: 'Configured RDS instances and CloudFront distribution for static delivery.',
  },
]

const Timeline = () => {
  return (
    <section className="timeline">
      <h2>Work log timeline</h2>
      <div className="timeline-list">
        {items.map((item) => (
          <motion.div
            key={item.period}
            className="timeline-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <span className="timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
