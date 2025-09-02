import { motion } from "framer-motion";
import { RiUserLine, RiUserStarLine, RiUserSettingsLine, RiUserHeartLine, RiAdminLine } from "react-icons/ri";

const RoleDashboards = () => {
  const roles = [
    {
      icon: <RiUserLine className="text-2xl" />,
      title: "Student / Employee",
      description: "Apply for leave, track status, and view history with a transparent timeline.",
      color: "blue",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <RiUserStarLine className="text-2xl" />,
      title: "Faculty",
      description: "Review, approve/reject, and provide remarks with workload-aware routing.",
      color: "green",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <RiUserSettingsLine className="text-2xl" />,
      title: "HOD",
      description: "Department-level oversight, escalations, and policy compliance checks.",
      color: "purple",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <RiUserHeartLine className="text-2xl" />,
      title: "Warden",
      description: "Hostel-specific approvals and gate-pass management with location awareness.",
      color: "orange",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <RiAdminLine className="text-2xl" />,
      title: "Admin",
      description: "User management, system configuration, analytics, and institutional settings.",
      color: "indigo",
      image: "/api/placeholder/300/200"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          gradient: "from-blue-500 to-blue-600"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          gradient: "from-green-500 to-green-600"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          gradient: "from-purple-500 to-purple-600"
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          gradient: "from-orange-500 to-orange-600"
        };
      case "indigo":
        return {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          gradient: "from-indigo-500 to-indigo-600"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          gradient: "from-gray-500 to-gray-600"
        };
    }
  };

  return (
    <section id="roles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg">
            <RiUserSettingsLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Role-based dashboards tailored to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              every stakeholder
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Each role gets a focused experience to reduce busywork and accelerate decision-making.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const color = getColorClasses(role.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                        {role.icon}
                      </div>
                      <p className="text-gray-600 text-sm font-medium">Dashboard Preview</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color.bg} ${color.text}`}>
                      {role.title.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center mr-4`}>
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {role.title === "Student / Employee" && (
                      <>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          One-click leave application
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Real-time status tracking
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Leave history archive
                        </div>
                      </>
                    )}
                    {role.title === "Faculty" && (
                      <>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Pending requests overview
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Bulk approval actions
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Workload balancing
                        </div>
                      </>
                    )}
                    {role.title === "HOD" && (
                      <>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Department analytics
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Policy compliance monitoring
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Escalation management
                        </div>
                      </>
                    )}
                    {role.title === "Warden" && (
                      <>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          Hostel leave approvals
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          Gate-pass management
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          Emergency contact integration
                        </div>
                      </>
                    )}
                    {role.title === "Admin" && (
                      <>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                          User management portal
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                          System configuration
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                          Advanced analytics dashboard
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience tailored dashboards?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how LeaveFlow transforms leave management for every role in your institution.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Request Personalized Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleDashboards;