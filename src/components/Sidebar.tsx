import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const sidebarLinks = [
  { path: '/aws/ec2', label: 'EC2' },
  { path: '/aws/s3', label: 'S3' },
  { path: '/aws/iam', label: 'IAM' },
  { path: '/aws/rds', label: 'RDS' },
  { path: '/aws/lambda', label: 'Lambda' },
  { path: '/aws/api-gateway', label: 'API Gateway' },
  { path: '/aws/cloudfront', label: 'CloudFront' },
  { path: '/aws/cloudwatch', label: 'CloudWatch' },
  { path: '/aws/route-53', label: 'Route 53' },
]

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <motion.aside
      className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="sidebar-header">
        <h2>AWS sections</h2>
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'Hide' : 'Show'}
        </button>
      </div>
      <nav className="sidebar-links">
        {sidebarLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  )
}

export default Sidebar
