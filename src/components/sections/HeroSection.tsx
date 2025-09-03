import { motion } from "framer-motion";
import { RiLeafLine, RiShieldCheckLine, RiBarChartBoxLine, RiTimeLine, RiUserSettingsLine, RiDashboardLine, RiCheckboxCircleFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { memo } from "react";

// Memoize the component to prevent unnecessary re-renders
const HeroSection = memo(() => {
  // Animation variants for reusability
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9, rotate: -2 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  // Tech stack data
  const techStack = [
    { icon: <SiMongodb className="text-green-500 text-xl mr-2" aria-hidden="true" />, name: "MongoDB" },
    { icon: <SiExpress className="text-gray-800 text-xl mr-2" aria-hidden="true" />, name: "Express.js" },
    { icon: <SiReact className="text-blue-500 text-xl mr-2" aria-hidden="true" />, name: "React" },
    { icon: <SiNodedotjs className="text-green-600 text-xl mr-2" aria-hidden="true" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-cyan-500 text-xl mr-2" aria-hidden="true" />, name: "Tailwind CSS" },
    // Placeholder icons for TanStack Query and Zustand
    { icon: <RiDashboardLine className="text-purple-500 text-xl mr-2" aria-hidden="true" />, name: "TanStack Query" },
    { icon: <RiUserSettingsLine className="text-indigo-500 text-xl mr-2" aria-hidden="true" />, name: "Zustand" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-22 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 opacity-50"></div>

     <div className="mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium shadow-sm"
            >
              <RiShieldCheckLine className="mr-2" aria-hidden="true" /> Student-Centric Leave Management
            </motion.div>

            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
              id="hero-heading"
            >
              LeaveFlow Digitizes Every Student's Leave Process with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                One-Click Simplicity
              </span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              No rush, no worries. LeaveFlow simplifies student leave applications with automated workflows, enabling approvals in under a minute while you focus on what matters.
            </motion.p>

            {/* Tech Stack Section */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-sm font-semibold text-gray-600 mb-3">BUILT WITH MODERN STACK</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.icon}
                    <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="#demo"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Watch LeaveFlow Demo"
              >
                <RiDashboardLine className="mr-2" /> Watch Demo
              </motion.a>
              <motion.a
                href="#code"
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold text-base border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Explore LeaveFlow Code"
              >
                <SiJavascript className="mr-2 text-yellow-500" /> Explore Code
              </motion.a>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                { icon: <RiTimeLine className="text-blue-600 text-xl" />, title: "60-Second", desc: "Leave Approval" },
                { icon: <RiUserSettingsLine className="text-indigo-600 text-xl" />, title: "Zero Paperwork", desc: "Digital Process" },
                { icon: <RiShieldCheckLine className="text-green-600 text-xl" />, title: "AI Assistant", desc: "Form Completion" },
                { icon: <RiBarChartBoxLine className="text-purple-600 text-xl" />, title: "Real-time", desc: "Status Tracking" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-10 h-10 bg-${feature.icon.props.className.split(" ")[1].split("-")[1]}-100 rounded-lg flex items-center justify-center mr-3`}>
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{feature.title}</div>
                    <div className="text-xs text-gray-600">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Dashboard Preview */}
          <div className="lg:w-1/2 relative">
            <motion.div
              {...scaleIn}
              transition={{ duration: 0.7, delay: 1 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden z-10 relative border border-gray-100"
              role="region"
              aria-label="LeaveFlow Dashboard Preview"
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                    <RiLeafLine className="text-white text-lg" aria-hidden="true" />
                  </div>
                  <span className="text-white font-semibold text-base">LeaveFlow Dashboard</span>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Leave Overview</h3>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">This Month</div>
                </div>

                {/* Stats Bars */}
                <div className="space-y-4 mb-6">
                  {[
                    { label: "Approved Leaves", percent: "87%", color: "green", delay: 1.2 },
                    { label: "Pending Approval", percent: "13%", color: "yellow", delay: 1.4 },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
                        <span className="font-medium">{stat.label}</span>
                        <span className={`font-semibold text-${stat.color}-600`}>{stat.percent}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: stat.percent }}
                          transition={{ duration: 1, delay: stat.delay }}
                          className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                  {[
                    { value: "127", label: "Approved", color: "green" },
                    { value: "19", label: "Pending", color: "yellow" },
                    { value: "2", label: "Rejected", color: "red" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`text-xl sm:text-2xl font-bold text-${stat.color}-700`}>{stat.value}</div>
                      <div className={`text-xs text-${stat.color}-600 font-medium`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Recent Activity</h4>
                  <div className="space-y-2">
                    {[
                      { text: "Sick leave approved for John Doe", color: "green" },
                      { text: "Emergency leave pending for Jane Smith", color: "yellow" },
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                        className="flex items-center text-xs sm:text-sm"
                      >
                        <RiCheckboxCircleFill className={`text-${activity.color}-500 mr-2`} aria-hidden="true" />
                        <span className="text-gray-700">{activity.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex justify-between gap-3">
                  <motion.button
                    className="text-xs sm:text-sm text-blue-600 font-semibold hover:text-blue-700 px-3 py-2 bg-blue-50 rounded-lg flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Create New Leave Request"
                  >
                    New Leave Request
                  </motion.button>
                  <motion.button
                    className="text-xs sm:text-sm text-gray-600 font-semibold hover:text-gray-700 px-3 py-2 bg-gray-100 rounded-lg flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View Leave History"
                  >
                    View History
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements with Parallax Effect */}
            {[
              { icon: <RiTimeLine className="text-green-600 text-lg" />, title: "94%", desc: "Time Saved", position: "-left-4 -top-4", delay: 1.2 },
              { icon: <RiUserSettingsLine className="text-purple-600 text-lg" />, title: "5 Roles", desc: "Supported", position: "-right-4 -bottom-4", delay: 1.4 },
            ].map((float, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.7, delay: float.delay }}
                className={`absolute ${float.position} bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20 border border-gray-100`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 bg-${float.icon.props.className.split(" ")[1].split("-")[1]}-100 rounded-lg flex items-center justify-center mr-2`}>
                    {float.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{float.title}</div>
                    <div className="text-xs text-gray-600">{float.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-col items-center mt-12"
        >
          <p className="text-gray-600 text-sm mb-3">Discover how LeaveFlow transforms leave management</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

export default HeroSection;