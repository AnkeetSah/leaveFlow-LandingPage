import { motion } from "framer-motion";
import {
  RiTentLine,
  RiLightbulbFlashLine,
  RiSearchEyeLine,
  RiShieldKeyholeLine,
  RiRobotLine,
  RiNotification3Line,
} from "react-icons/ri";

const ExecutiveSummary = () => {
  return (
    <section
      id="features"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl shadow-md mb-5">
            <RiTentLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-tight">
            Revolutionizing Leave Management for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Institutions
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LeaveFlow replaces outdated paper-based processes with a sleek,
            enterprise-grade digital system powered by the MERN stack and
            intelligent workflow automation.
          </p>
        </motion.div>

        {/* Challenge & Innovation - Now in rows instead of columns */}
        <div className="flex flex-col gap-8 md:gap-12 items-start">
          {/* The Challenge We Solve - First Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <RiSearchEyeLine className="text-red-600 text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                The Challenge We Solve
              </h3>
            </div>

            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Traditional leave management is plagued with inefficiencies that
              drain institutional productivity:
            </p>

            <ul className="space-y-4">
              {[
                "Manual paperwork causing delays and lost applications",
                "No transparency in approval progress",
                "High admin workload due to manual tracking",
                "No audit trail for compliance and accountability",
                "Poor user experience for applicants and approvers",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.05 * index,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="flex items-start"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Innovation - Second Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <RiLightbulbFlashLine className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Innovation</h3>
            </div>

            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              LeaveFlow delivers a modern digital solution that transforms leave
              management into a seamless experience:
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icon: <RiShieldKeyholeLine className="text-green-600 text-xl md:text-2xl" />,
                  bg: "bg-green-100",
                  title: "Digital-First Workflow",
                  description: "Automated routing with intelligent notifications",
                },
                {
                  icon: <RiTentLine className="text-purple-600 text-xl md:text-2xl" />,
                  bg: "bg-purple-100",
                  title: "Role-Specific Dashboards",
                  description: "Interfaces tailored for students, faculty, and admins",
                },
                {
                  icon: <RiLightbulbFlashLine className="text-orange-600 text-xl md:text-2xl" />,
                  bg: "bg-orange-100",
                  title: "Real-Time Transparency",
                  description: "Clear visibility of status across workflow stages",
                },
                {
                  icon: <RiRobotLine className="text-blue-600 text-xl md:text-2xl" />,
                  bg: "bg-blue-100",
                  title: "AI Form Assistant",
                  description: "Faster, error-free leave applications with AI",
                },
                {
                  icon: <RiNotification3Line className="text-indigo-600 text-xl md:text-2xl" />,
                  bg: "bg-indigo-100",
                  title: "Built-In Notifications",
                  description: "Custom alerts without third-party tools",
                },
                {
                  icon: <RiShieldKeyholeLine className="text-red-600 text-xl md:text-2xl" />,
                  bg: "bg-red-100",
                  title: "Enterprise Security",
                  description: "OTP login + audit-ready security logs",
                },
                {
                  icon: <RiSearchEyeLine className="text-teal-600 text-xl md:text-2xl" />,
                  bg: "bg-teal-100",
                  title: "Scalable Architecture",
                  description: "Flexible deployment for institutions of any size",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.05 * index,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 ${item.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 md:mt-20 lg:mt-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-10 lg:p-14 text-white shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {[
              { number: "80%", label: "Faster Processing" },
              { number: "100%", label: "Paperless Workflow" },
              { number: "24/7", label: "Accessibility" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-20px" }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-xs md:text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;