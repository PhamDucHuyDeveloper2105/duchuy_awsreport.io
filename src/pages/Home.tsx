import { Link } from 'react-router-dom'
import Card from '../components/Card'

const reportSections = [
  { title: 'Worklog', to: '/worklog', description: 'Daily activities, milestones, and learnings.' },
  { title: 'Proposal', to: '/proposal', description: 'Project ideas and internship planning details.' },
  { title: 'Events', to: '/events', description: 'AWS community events and participation highlights.' },
  { title: 'Workshop', to: '/workshop', description: 'Hands-on workshops and technical sessions.' },
  { title: 'Evaluation', to: '/evaluation', description: 'Self-evaluation and reflection on progress.' },
  { title: 'Feedback', to: '/feedback', description: 'Sharing and feedback from the internship journey.' },
]

const Home = () => {
  return (
    <section className="page-content home-page">
      <div className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">INTERNSHIP REPORT</p>
          <h1>First Cloud AI Journey @ AWS Vietnam</h1>
          <p className="hero-description">
            This report documents my internship experience with AWS Vietnam, from the first
            introduction to cloud services to the final reflection on technical growth and teamwork.
          </p>
          <div className="home-links">
            <Link to="/worklog" className="button">
              Read Worklog
            </Link>
            <Link to="/proposal" className="button secondary">
              View Proposal
            </Link>
          </div>
          <div className="hero-badges">
            <span>Cloud Intern</span>
            <span>Amazon Web Services</span>
            <span>2026</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://hei1sme.github.io/hei-FCAJ-intership-report/LNGH_AWS.jpg"
            alt="Le Nguyen Gia Hung"
            className="home-hero-image"
          />
        </div>
      </div>

      <div className="home-grid">
        <Card title="Student Information">
          <ul className="info-list">
            <li><strong>Full Name:</strong> Le Nguyen Gia Hung</li>
            <li><strong>Phone Number:</strong> 0394262651</li>
            <li><strong>Email:</strong> <a href="mailto:heiontheway@gmail.com">heiontheway@gmail.com</a></li>
            <li><strong>University:</strong> FPT University</li>
            <li><strong>Major:</strong> Artificial Intelligence</li>
            <li><strong>Internship Company:</strong> Amazon Web Services Vietnam</li>
            <li><strong>Position:</strong> FCAJ Cloud Intern</li>
            <li><strong>Duration:</strong> 05/01/2026 – 05/04/2026</li>
          </ul>
        </Card>

        <Card title="Report Content">
          <div className="report-links">
            {reportSections.map((item) => (
              <Link key={item.to} to={item.to} className="report-link-card">
                <span>{item.title}</span>
                <small>{item.description}</small>
              </Link>
            ))}
          </div>
        </Card>

        <Card title="Key Highlights">
          <ul className="resource-list">
            <li>Explored core AWS services such as EC2, S3, IAM, and Lambda.</li>
            <li>Learned architecture patterns and cloud deployment practices.</li>
            <li>Participated in workshops, events, and feedback sharing sessions.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default Home
