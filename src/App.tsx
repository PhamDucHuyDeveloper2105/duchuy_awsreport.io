import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AwsLayout from './components/AwsLayout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Worklog from './pages/Worklog'
import AWS from './pages/AWS'
import Architecture from './pages/Architecture'
import Gallery from './pages/Gallery'
import Report from './pages/Report'
import Contact from './pages/Contact'
import Proposal from './pages/Proposal'
import Events from './pages/Events'
import Workshop from './pages/Workshop'
import Evaluation from './pages/Evaluation'
import Feedback from './pages/Feedback'
import NotFound from './pages/NotFound'
import EC2 from './pages/aws/EC2'
import S3 from './pages/aws/S3'
import IAM from './pages/aws/IAM'
import RDS from './pages/aws/RDS'
import Lambda from './pages/aws/Lambda'
import ApiGateway from './pages/aws/ApiGateway'
import CloudFront from './pages/aws/CloudFront'
import CloudWatch from './pages/aws/CloudWatch'
import Route53 from './pages/aws/Route53'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="worklog" element={<Worklog />} />
          <Route path="aws" element={<AwsLayout />}>
            <Route index element={<AWS />} />
            <Route path="ec2" element={<EC2 />} />
            <Route path="s3" element={<S3 />} />
            <Route path="iam" element={<IAM />} />
            <Route path="rds" element={<RDS />} />
            <Route path="lambda" element={<Lambda />} />
            <Route path="api-gateway" element={<ApiGateway />} />
            <Route path="cloudfront" element={<CloudFront />} />
            <Route path="cloudwatch" element={<CloudWatch />} />
            <Route path="route-53" element={<Route53 />} />
          </Route>
          <Route path="architecture" element={<Architecture />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="report" element={<Report />} />
          <Route path="contact" element={<Contact />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="events" element={<Events />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
