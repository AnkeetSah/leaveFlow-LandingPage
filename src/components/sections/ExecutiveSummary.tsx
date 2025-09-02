import { motion } from "framer-motion";
import { RiTentLine, RiLightbulbFlashLine, RiSearchEyeLine, RiShieldKeyholeLine, RiRobotLine, RiNotification3Line } from "react-icons/ri";

const ExecutiveSummary = () => {
  return (
    <section id="executive-summary" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <RiTentLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Leave Management for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Modern Institutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            LeaveFlow replaces antiquated paper-based systems with a sophisticated, enterprise-grade digital solution built on the MERN stack with intelligent workflow automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* The Challenge We Solve */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <RiSearchEyeLine className="text-red-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge We Solve</h3>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">
              Traditional leave management suffers from inefficiencies that cost institutions time and resources:
            </p>
            
            <ul className="space-y-5">
              {[
                "Manual paperwork leading to lost applications and processing delays",
                "Lack of transparency in approval status and workflow stages",
                "Administrative overhead from manual tracking and follow-ups",
                "No audit trail for compliance and accountability",
                "Poor user experience for both applicants and approvers"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Innovation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 shadow-sm border border-blue-100"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <RiLightbulbFlashLine className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Innovation</h3>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">
              LeaveFlow introduces a comprehensive digital solution that transforms leave management:
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <RiShieldKeyholeLine className="text-green-600 text-xl" />,
                  bg: "bg-green-100",
                  title: "Digital-First Workflow",
                  description: "Automated routing and intelligent notifications"
                },
                {
                  icon: <RiTentLine className="text-purple-600 text-xl" />,
                  bg: "bg-purple-100",
                  title: "Role-Specific Dashboards",
                  description: "Tailored interfaces for students, faculty, and administrators"
                },
                {
                  icon: <RiLightbulbFlashLine className="text-orange-600 text-xl" />,
                  bg: "bg-orange-100",
                  title: "Real-Time Transparency",
                  description: "Complete visibility into approval status and workflow stages"
                },
                {
                  icon: <RiRobotLine className="text-blue-600 text-xl" />,
                  bg: "bg-blue-100",
                  title: "AI Form Assistant",
                  description: "Intelligent assistance for quick and accurate form completion"
                },
                {
                  icon: <RiNotification3Line className="text-indigo-600 text-xl" />,
                  bg: "bg-indigo-100",
                  title: "Self-Made Notification System",
                  description: "Custom-built alert system with no third-party dependencies"
                },
                {
                  icon: <RiShieldKeyholeLine className="text-red-600 text-xl" />,
                  bg: "bg-red-100",
                  title: "Enterprise Security",
                  description: "OTP authentication and comprehensive audit logs"
                },
                {
                  icon: <RiSearchEyeLine className="text-teal-600 text-xl" />,
                  bg: "bg-teal-100",
                  title: "Scalable Architecture",
                  description: "Ready for institutional deployment of any size"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm"
                >
                  <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0 mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "80%", label: "Faster Processing" },
              { number: "100%", label: "Paperless Workflow" },
              { number: "24/7", label: "Accessibility" },
              { number: "99.9%", label: "Uptime Guarantee" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;