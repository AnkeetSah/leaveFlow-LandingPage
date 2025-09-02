import DemoAccess from "../sections/DemoAccess"
import ExecutiveSummary from "../sections/ExecutiveSummary"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import HeroSection from "../sections/HeroSection"
import RoleDashboards from "../sections/RoleDashboards"
import TechnologyStack from "../sections/TechnologyStack"
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
        <TechnologyStack/>
        <Footer/>
    </div>
  )
}

export default Layout