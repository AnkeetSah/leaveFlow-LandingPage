import DemoAccess from "../sections/DemoAccess"
import ExecutiveSummary from "../sections/ExecutiveSummary"
import Header from "../sections/Header"
import HeroSection from "../sections/HeroSection"
import RoleDashboards from "../sections/RoleDashboards"
import WorkflowSection from "../sections/WorkFLowSection"


const Layout = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <ExecutiveSummary/>
        <RoleDashboards/>
        <WorkflowSection/>
        <DemoAccess/>
    </div>
  )
}

export default Layout