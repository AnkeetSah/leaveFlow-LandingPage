import { motion } from "framer-motion";
import {
  RiTentLine,
  RiLightbulbFlashLine,
  RiSearchEyeLine,
  RiShieldKeyholeLine,
  RiRobotLine,
  RiNotification3Line,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiBarChartBoxLine,
} from "react-icons/ri";

const ExecutiveSummary = () => {
  const featureCards = [
    {
      icon: <RiShieldKeyholeLine className="text-white text-xl" />,
      title: "Digital-First Workflow",
      description: "Automated routing with intelligent notifications",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <RiTentLine className="text-white text-xl" />,
      title: "Role-Specific Dashboards",
      description: "Interfaces tailored for students, faculty, and admins",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <RiLightbulbFlashLine className="text-white text-xl" />,
      title: "Real-Time Transparency",
      description: "Clear visibility of status across workflow stages",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: <RiRobotLine className="text-white text-xl" />,
      title: "AI Form Assistant",
      description: "Faster, error-free leave applications with AI",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <RiNotification3Line className="text-white text-xl" />,
      title: "Built-In Notifications",
      description: "Custom alerts without third-party tools",
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      icon: <RiShieldKeyholeLine className="text-white text-xl" />,
      title: "Enterprise Security",
      description: "OTP login + audit-ready security logs",
      gradient: "from-red-500 to-rose-600",
    },
  ];

  const stats = [
    { number: "80%", label: "Faster Processing", trend: "+25%" },
    { number: "100%", label: "Paperless Workflow", trend: "Eco-Friendly" },
    { number: "24/7", label: "Accessibility", trend: "Always On" },
    { number: "99.9%", label: "Uptime Guarantee", trend: "Reliable" },
  ];

  const problems = [
    "Manual paperwork causing delays and lost applications",
    "No transparency in approval progress",
    "High admin workload due to manual tracking",
    "No audit trail for compliance and accountability",
    "Poor user experience for applicants and approvers",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <RiBarChartBoxLine className="text-white text-3xl" />
          </motion.div>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Enterprise Leave Management
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Modernize Your
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leave Workflow
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform outdated paper processes into a seamless digital experience 
            with intelligent automation and real-time visibility.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {stat.trend}
                </div>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500 mt-2"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <RiSearchEyeLine className="text-red-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Current Challenges</h2>
                <p className="text-gray-600">Inefficiencies plaguing traditional systems</p>
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                    <div className="w-2 h-2 bg-red-600 rounded-full group-hover:bg-white transition-colors"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <RiLightbulbFlashLine className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                <p className="text-gray-600">LeaveFlow's innovative approach</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {featureCards.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-5 text-white shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                    <RiArrowRightLine className="text-white/60 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Institution?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of institutions that have modernized their leave management with LeaveFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <RiArrowRightLine className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-blue-500">
              {[
                "No credit card required",
                "14-day free trial",
                "Full support included",
                "Cancel anytime"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-blue-200">
                  <RiCheckboxCircleLine className="text-lg" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;