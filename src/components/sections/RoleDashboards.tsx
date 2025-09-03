import { motion } from "framer-motion";
import {
  RiUserLine,
  RiUserStarLine,
  RiUserSettingsLine,
  RiUserHeartLine,
  RiAdminLine,
} from "react-icons/ri";

const RoleDashboards = () => {
  const roles = [
    {
      icon: <RiUserLine className="text-2xl" />,
      title: "Student / Employee",
      description:
        "Apply for leave, track status, and view history with a transparent timeline.",
      color: "blue",
    },
    {
      icon: <RiUserStarLine className="text-2xl" />,
      title: "Faculty",
      description:
        "Review, approve/reject, and provide remarks with workload-aware routing.",
      color: "green",
    },
    {
      icon: <RiUserSettingsLine className="text-2xl" />,
      title: "HOD",
      description:
        "Department-level oversight, escalations, and policy compliance checks.",
      color: "purple",
    },
    {
      icon: <RiUserHeartLine className="text-2xl" />,
      title: "Warden",
      description:
        "Hostel-specific approvals and gate-pass management with location awareness.",
      color: "orange",
    },
    {
      icon: <RiAdminLine className="text-2xl" />,
      title: "Admin",
      description:
        "User management, system configuration, analytics, and institutional settings.",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          dot: "bg-blue-500",
          gradient: "from-blue-500 to-blue-600",
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          dot: "bg-green-500",
          gradient: "from-green-500 to-green-600",
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          dot: "bg-purple-500",
          gradient: "from-purple-500 to-purple-600",
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          dot: "bg-orange-500",
          gradient: "from-orange-500 to-orange-600",
        };
      case "indigo":
        return {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          dot: "bg-indigo-500",
          gradient: "from-indigo-500 to-indigo-600",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          dot: "bg-gray-500",
          gradient: "from-gray-500 to-gray-600",
        };
    }
  };

  return (
    <section
      id="roles"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6">
            <RiUserSettingsLine className="text-blue-600 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Role-based dashboards designed for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              every stakeholder
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Each role gets a personalized workspace to streamline actions,
            enhance clarity, and accelerate decision-making.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roles.map((role, index) => {
            const color = getColorClasses(role.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Top Banner */}
                <div
                  className={`h-28 bg-gradient-to-r ${color.gradient} relative`}
                >
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')]"></div>
                  <div className="absolute bottom-[-1.5rem] left-6 flex items-center">
                    <div
                      className={`w-16 h-16 ${color.bg} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      {role.icon}
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">
                      {role.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-3">
                    {role.title === "Student / Employee" && (
                      <>
                        {[
                          "One-click leave application",
                          "Real-time status tracking",
                          "Leave history archive",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div
                              className={`w-2 h-2 ${color.dot} rounded-full mr-2`}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </>
                    )}
                    {role.title === "Faculty" && (
                      <>
                        {[
                          "Pending requests overview",
                          "Bulk approval actions",
                          "Workload balancing",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div
                              className={`w-2 h-2 ${color.dot} rounded-full mr-2`}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </>
                    )}
                    {role.title === "HOD" && (
                      <>
                        {[
                          "Department analytics",
                          "Policy compliance monitoring",
                          "Escalation management",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div
                              className={`w-2 h-2 ${color.dot} rounded-full mr-2`}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </>
                    )}
                    {role.title === "Warden" && (
                      <>
                        {[
                          "Hostel leave approvals",
                          "Gate-pass management",
                          "Emergency contact integration",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div
                              className={`w-2 h-2 ${color.dot} rounded-full mr-2`}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </>
                    )}
                    {role.title === "Admin" && (
                      <>
                        {[
                          "User management portal",
                          "System configuration",
                          "Advanced analytics dashboard",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div
                              className={`w-2 h-2 ${color.dot} rounded-full mr-2`}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleDashboards;
