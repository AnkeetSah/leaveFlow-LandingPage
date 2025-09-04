import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  RiUserLine,
  RiUserStarLine,
  RiUserSettingsLine,
  RiUserHeartLine,
  RiAdminLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiSearchLine,
  RiBarChartBoxLine,
  RiTimeLine,
  RiCalendarEventLine,
  RiTeamLine,
  RiShieldKeyholeLine,
  RiNotification3Line,
  RiDashboardLine,
  
  RiRobot2Line,
  RiPercentLine,
  RiFileHistoryLine,
  RiMessage2Line,
  RiUploadCloudLine,
  RiDeleteBinLine,
} from "react-icons/ri";

const RoleDashboards = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const roles = [
    {
      icon: <RiUserLine className="text-xl md:text-2xl" />,
      title: "Student",
      description:
        "Submit leave applications, track approvals, view history, and get real-time updates.",
      color: "blue",
      features: [
        {
          name: "One-click leave application",
          icon: <RiCalendarEventLine />,
          detail:
            "Submit requests quickly with smart defaults and pre-filled details.",
        },
        {
          name: "AI Assistant Help",
          icon: <RiRobot2Line />,
          detail:
            "Let the AI assistant auto-fill your leave form using voice or text prompts.",
        },
        {
          name: "Attendance % Calculation",
          icon: <RiPercentLine />,
          detail:
            "See your updated attendance percentage automatically while applying.",
        },
        {
          name: "Leave history archive",
          icon: <RiFileHistoryLine />,
          detail:
            "View your complete leave record with filters, sorting, and export options.",
        },
        {
          name: "Instant notifications",
          icon: <RiNotification3Line />,
          detail:
            "Get notified instantly when your leave status changes at any stage.",
        },
      ],
    },
    {
      icon: <RiUserStarLine className="text-xl md:text-2xl" />,
      title: "Faculty",
      description:
        "Approve, reject, or request updates on student leave applications.",
      color: "green",
      features: [
        {
          name: "Pending requests overview",
          icon: <RiNotification3Line />,
          detail:
            "View all pending requests in one place with priority indicators.",
        },
        {
          name: "Bulk approval",
          icon: <RiTeamLine />,
          detail:
            "Approve or reject multiple applications at once to save time.",
        },
        {
          name: "Add comments & request updates",
          icon: <RiMessage2Line />,
          detail:
            "Provide feedback or request more details before approving leave.",
        },
        {
          name: "Decision tracking",
          icon: <RiTimeLine />,
          detail:
            "Keep a record of all your approvals/rejections with timestamps.",
        },
      ],
    },
    {
      icon: <RiUserSettingsLine className="text-xl md:text-2xl" />,
      title: "HOD",
      description:
        "Department-level approval authority with compliance and monitoring.",
      color: "purple",
      features: [
        {
          name: "Approve/Reject with comments",
          icon: <RiCheckboxCircleLine />,
          detail:
            "Review faculty-approved leaves and add remarks before final decision.",
        },
        {
          name: "Policy compliance checks",
          icon: <RiShieldKeyholeLine />,
          detail:
            "Ensure institutional policies are followed before granting leave.",
        },
        {
          name: "Bulk actions",
          icon: <RiTeamLine />,
          detail:
            "Handle multiple requests at once, similar to faculty bulk updates.",
        },
        {
          name: "Leave trend analytics",
          icon: <RiBarChartBoxLine />,
          detail:
            "Analyze department-wide leave patterns and monitor impact.",
        },
      ],
    },
    {
      icon: <RiUserHeartLine className="text-xl md:text-2xl" />,
      title: "Warden",
      description:
        "Hostel-specific approvals, gate pass management, and attendance sync.",
      color: "orange",
      features: [
        {
          name: "Hostel leave approvals",
          icon: <RiCalendarEventLine />,
          detail:
            "Give final approval for hostel residents with hostel-specific rules.",
        },
        {
          name: "Gate-pass generation",
          icon: <RiShieldKeyholeLine />,
          detail:
            "Generate secure digital gate passes linked with hostel security.",
        },
        {
          name: "Emergency contact alerts",
          icon: <RiTeamLine />,
          detail:
            "Quickly notify guardians or emergency contacts when required.",
        },
        {
          name: "Attendance sync",
          icon: <RiTimeLine />,
          detail:
            "Automatically sync leave status with hostel attendance system.",
        },
      ],
    },
    {
      icon: <RiAdminLine className="text-xl md:text-2xl" />,
      title: "Admin",
      description:
        "Manage users, system settings, and full visibility of leave workflow.",
      color: "indigo",
      features: [
        {
          name: "User management",
          icon: <RiTeamLine />,
          detail:
            "Add, remove, or update users with role-based permissions.",
        },
        {
          name: "Bulk user upload",
          icon: <RiUploadCloudLine />,
          detail:
            "Upload Excel/CSV to onboard multiple users at once with roles assigned.",
        },
        {
          name: "Instant password sharing",
          icon: <RiShieldKeyholeLine />,
          detail:
            "Send secure one-time passwords for first login automatically via email.",
        },
        {
          name: "System-wide visibility",
          icon: <RiDashboardLine />,
          detail:
            "Track every leave, see who approved/rejected, and generate reports.",
        },
        {
          name: "User removal & cleanup",
          icon: <RiDeleteBinLine />,
          detail:
            "Remove inactive users and maintain system hygiene easily.",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          gradient: "from-blue-500 to-blue-600",
          hover: "hover:from-blue-600 hover:to-blue-700",
          light: "bg-blue-50",
          dark: "bg-blue-600"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          border: "border-green-200",
          gradient: "from-green-500 to-green-600",
          hover: "hover:from-green-600 hover:to-green-700",
          light: "bg-green-50",
          dark: "bg-green-600"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          border: "border-purple-200",
          gradient: "from-purple-500 to-purple-600",
          hover: "hover:from-purple-600 hover:to-purple-700",
          light: "bg-purple-50",
          dark: "bg-purple-600"
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          border: "border-orange-200",
          gradient: "from-orange-500 to-orange-600",
          hover: "hover:from-orange-600 hover:to-orange-700",
          light: "bg-orange-50",
          dark: "bg-orange-600"
        };
      case "indigo":
        return {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          border: "border-indigo-200",
          gradient: "from-indigo-500 to-indigo-600",
          hover: "hover:from-indigo-600 hover:to-indigo-700",
          light: "bg-indigo-50",
          dark: "bg-indigo-600"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          border: "border-gray-200",
          gradient: "from-gray-500 to-gray-600",
          hover: "hover:from-gray-600 hover:to-gray-700",
          light: "bg-gray-50",
          dark: "bg-gray-600"
        };
    }
  };

  const currentRole = roles[activeRole];
  const color = getColorClasses(currentRole.color);

  return (
    <section id="roles" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-5"
          >
            <RiUserSettingsLine className="text-blue-600 text-2xl" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Intelligent Dashboards for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Every Role
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Customized interfaces designed to streamline workflows and enhance productivity for each stakeholder in the leave management process.
          </p>
        </motion.div>

        {/* Interactive Role Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {roles.map((role, index) => {
            const roleColor = getColorClasses(role.color);
            return (
              <motion.button
                key={index}
                onClick={() => setActiveRole(index)}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2.5 rounded-lg ${index === activeRole ? `${roleColor.dark} text-white shadow-md` : `${roleColor.bg} ${roleColor.text}`} font-medium text-sm flex items-center transition-all duration-300`}
              >
                {role.icon}
                <span className="ml-2 hidden sm:inline">{role.title.split(' / ')[0]}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Role Details Card */}
          <motion.div 
            key={activeRole}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className={`p-6 ${color.light} border-b ${color.border}`}>
              <div className="flex items-center mb-4">
                <div className={`w-14 h-14 ${color.bg} rounded-xl flex items-center justify-center mr-4 shadow-sm`}>
                  {currentRole.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentRole.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{currentRole.description}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <RiCheckboxCircleLine className={`mr-2 ${color.text}`} />
                Key Features
              </h4>
              <div className="space-y-4">
                {currentRole.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`p-4 rounded-xl border ${color.border} transition-all duration-300 ${hoveredFeature === idx ? 'shadow-md ' + color.light : 'bg-white'}`}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg ${color.bg} ${color.text} mr-3`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">{feature.name}</h5>
                        <AnimatePresence>
                          {hoveredFeature === idx && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm text-gray-600 mt-2"
                            >
                              {feature.detail}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0">
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl bg-gradient-to-r ${color.gradient} ${color.hover} text-white font-medium flex items-center justify-center shadow-md transition-all duration-300`}
              >
                Explore {currentRole.title.split(' / ')[0]} Features
                <RiArrowRightLine className="ml-2" />
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Dashboard Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <div className={`p-4 ${color.dark} text-white flex items-center`}>
                <RiDashboardLine className="mr-2" />
                <span className="font-medium">{currentRole.title} Dashboard</span>
                <div className="ml-auto flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Dashboard Preview */}
                <div className="grid grid-cols-12 gap-4 mb-6">
                  {/* Stats Cards */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                        <RiCalendarEventLine className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Pending Requests</p>
                        <p className="text-lg font-bold text-gray-800">12</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center mr-3">
                        <RiCheckboxCircleLine className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Approved This Week</p>
                        <p className="text-lg font-bold text-gray-800">8</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="col-span-12 lg:col-span-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center mr-3">
                        <RiTeamLine className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Team Availability</p>
                        <p className="text-lg font-bold text-gray-800">78%</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Main Content Area */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="col-span-12 bg-gray-50 rounded-xl p-4"
                  >
                    <div className="flex items-center mb-4">
                      <h4 className="font-semibold text-gray-800">Recent Requests</h4>
                      <div className="ml-auto flex bg-white rounded-lg px-3 py-1.5 text-sm">
                        <RiSearchLine className="text-gray-400 mr-2" />
                        <input 
                          type="text" 
                          placeholder="Search..." 
                          className="outline-none bg-transparent w-32"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 + (item * 0.1) }}
                          className="bg-white rounded-lg p-3 flex items-center border border-gray-200"
                        >
                          <div className={`w-3 h-3 rounded-full ${color.bg} mr-3`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">Leave Request #{item}</p>
                            <p className="text-xs text-gray-500">2 days ago</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${color.bg} ${color.text} font-medium`}>
                            Pending
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex justify-center"
                >
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((dot) => (
                      <div key={dot} className={`w-2 h-2 rounded-full ${dot === 1 ? color.dark : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5", label: "Role Types" },
              { number: "95%", label: "Time Saved" },
              { number: "100%", label: "Customization" },
              { number: "24/7", label: "Access" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleDashboards;