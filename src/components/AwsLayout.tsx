import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const AwsLayout = () => {
  return (
    <div className="aws-layout">
      <Sidebar />
      <main className="page-container aws-page-container">
        <Outlet />
      </main>
    </div>
  )
}

export default AwsLayout
