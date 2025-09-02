import { motion } from "framer-motion";
import { RiLeafLine, RiShieldCheckLine, RiBarChartBoxLine, RiNotification3Line, RiTimeLine, RiUserSettingsLine, RiDashboardLine, RiBrainLine, RiCheckboxCircleFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16 px-4 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
            >
              <RiShieldCheckLine className="mr-2" /> Student-Centric Leave Management
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              LeaveFlow Digitizes Every Student's Leave Process with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                One-Click Simplicity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              No rush, no worries. LeaveFlow solves every student's leave problems with simple clicks. 
              Get approved leaves within a minute - all paperwork handled automatically while you focus on what matters.
            </motion.p>

            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-sm font-semibold text-gray-600 mb-3">BUILT WITH MODERN STACK</div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <SiMongodb className="text-green-500 text-xl mr-2" />
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <SiExpress className="text-gray-800 text-xl mr-2" />
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <SiReact className="text-blue-500 text-xl mr-2" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <SiNodedotjs className="text-green-600 text-xl mr-2" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <SiTailwindcss className="text-cyan-500 text-xl mr-2" />
                  <span className="text-sm font-medium">Tailwind CSS</span>
                </div>
                
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-5 h-5 mr-2 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png')" }}></div>
                  <span className="text-sm font-medium">TanStack Query</span>
                </div>
                
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-5 h-5 mr-2 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560')" }}></div>
                  <span className="text-sm font-medium">Zustand</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                <RiDashboardLine className="mr-2" /> Watch Demo →
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <SiJavascript className="mr-2 text-yellow-500" /> Explore Code
              </button>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                  <RiTimeLine className="text-blue-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">60-Second</div>
                  <div className="text-sm text-gray-600">Leave Approval</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-3">
                  <RiUserSettingsLine className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Zero Paperwork</div>
                  <div className="text-sm text-gray-600">Digital Process</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                  <RiShieldCheckLine className="text-green-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">AI Assistant</div>
                  <div className="text-sm text-gray-600">Form Completion</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                  <RiBarChartBoxLine className="text-purple-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Real-time</div>
                  <div className="text-sm text-gray-600">Status Tracking</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Enhanced Dashboard Preview */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden z-10 relative border border-gray-200"
            >
              <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <RiLeafLine className="text-white text-xl" />
                  </div>
                  <span className="text-white font-semibold text-lg">LeaveFlow Dashboard</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Leave Overview</h3>
                  <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">This Month</div>
                </div>

                {/* Stats Bars - Enhanced */}
                <div className="space-y-5 mb-8">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">Approved Leaves</span>
                      <span className="font-semibold text-green-600">87%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">Pending Approval</span>
                      <span className="font-semibold text-yellow-600">13%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "13%" }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats - Enhanced */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">127</div>
                    <div className="text-xs text-green-600 font-medium">Approved</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-yellow-700">19</div>
                    <div className="text-xs text-yellow-600 font-medium">Pending</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">2</div>
                    <div className="text-xs text-red-600 font-medium">Rejected</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <RiCheckboxCircleFill className="text-green-500 mr-2" />
                      <span className="text-gray-700">Sick leave approved for John Doe</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <RiCheckboxCircleFill className="text-yellow-500 mr-2" />
                      <span className="text-gray-700">Emergency leave pending for Jane Smith</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex justify-between">
                  <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 px-3 py-2 bg-blue-50 rounded-lg">
                    New Leave Request
                  </button>
                  <button className="text-sm text-gray-600 font-semibold hover:text-gray-700 px-3 py-2 bg-gray-100 rounded-lg">
                    View History
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements - Positioned to be visible */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="absolute -left-4 -top-4 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-100"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <RiTimeLine className="text-green-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">94%</div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-100"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <RiUserSettingsLine className="text-purple-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">5 Roles</div>
                  <div className="text-xs text-gray-600">Supported</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-col items-center mt-16"
        >
          <p className="text-gray-600 mb-4">Discover how LeaveFlow transforms leave management</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 2.0 }}
            className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 2.0 }}
              className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS for animated background blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;