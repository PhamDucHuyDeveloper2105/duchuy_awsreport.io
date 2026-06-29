import Card from '../components/Card'

const Contact = () => {
  return (
    <section className="page-content">
      <h1>Contact</h1>
      <p>
        Thank you for visiting this internship report. If you have questions or would like to discuss the
        experience further, feel free to reach out.
      </p>

      <div className="section-grid">
        <Card title="Contact Information">
          <ul>
            <li><strong>Name:</strong> Le Nguyen Gia Hung</li>
            <li><strong>Email:</strong> <a href="mailto:heiontheway@gmail.com">heiontheway@gmail.com</a></li>
            <li><strong>Phone:</strong> 0394262651</li>
          </ul>
        </Card>
        <Card title="Message">
          <p>
            I am always happy to connect with others who are interested in cloud computing, AWS learning,
            and practical internship experiences.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Contact
