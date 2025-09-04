import { motion } from "framer-motion";
import {
  RiSendPlaneLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiHomeGearLine,
  RiCheckboxCircleLine,
  RiQrCodeLine
} from "react-icons/ri";

const WorkFlowSection = () => {
  const workflowSteps = [
    {
      icon: <RiSendPlaneLine className="text-2xl" />,
      title: "Submit Request",
      description:
        "Users create a leave request with validations and required details through an intuitive form with AI assistance.",
      color: "blue",
      features: ["AI form assistant", "Automatic validation", "Required attachments", "Instant confirmation"],
    },
    {
      icon: <RiUserSearchLine className="text-2xl" />,
      title: "Faculty Review",
      description:
        "Smart routing to reviewer(s) with SLAs, workload balancing, and optional remarks for context.",
      color: "green",
      features: ["Workload-aware routing", "48-hour SLA", "Remarks system", "Mobile approval"],
    },
    {
      icon: <RiUserSettingsLine className="text-2xl" />,
      title: "HOD Approval",
      description:
        "Department oversight ensures policy compliance, budget considerations, and handles escalations when needed.",
      color: "purple",
      features: ["Policy compliance checks", "Budget monitoring", "Escalation handling", "Department analytics"],
    },
    {
      icon: <RiHomeGearLine className="text-2xl" />,
      title: "Warden Clearance",
      description:
        "Hostel-level checks, parent notifications, and gate-pass coordination for complete transparency.",
      color: "orange",
      features: ["Hostel rules validation", "Parent notifications", "Gate-pass generation", "Emergency contact sync"],
    },
    {
      icon: <RiCheckboxCircleLine className="text-2xl" />,
      title: "Final Status & Audit",
      description:
        "Approved/Rejected with full audit trail, comprehensive notifications, and digital documentation.",
      color: "indigo",
      features: ["Complete audit trail", "Multi-channel notifications", "Digital documentation", "Export capabilities"],
    },
    {
      icon: <RiQrCodeLine className="text-2xl" />,
      title: "Campus Exit Verification",
      description:
        "Security guards scan QR codes to verify approved leaves before allowing students to exit campus.",
      color: "red",
      features: ["QR code verification", "Real-time validation", "Exit timestamp", "Security alerts"],
    },
  ];

  const colorClasses: Record<string, any> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", dot: "bg-blue-500" },
    green: { bg: "bg-green-100", text: "text-green-600", dot: "bg-green-500" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", dot: "bg-purple-500" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", dot: "bg-orange-500" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", dot: "bg-indigo-500" },
    red: { bg: "bg-red-100", text: "text-red-600", dot: "bg-red-500" },
  };

  return (
    <section id="workflow" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-22 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 shadow-lg">
            <RiSendPlaneLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent, Configurable{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every request moves through a structured path — ensuring accountability, speed, and full visibility.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated gradient line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-green-300 to-red-300 animate-pulse"></div>

          <div className="space-y-12 lg:space-y-24">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const color = colorClasses[step.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`lg:w-1/2 ${isEven ? "lg:pl-12" : "lg:pr-12"} mb-8 lg:mb-0`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center mr-4`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <ul className="space-y-2">
                        {step.features.map((f, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 ${color.dot} rounded-full mr-2`}></div>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-6 h-6 ${color.bg} rounded-full border-4 border-white shadow-md flex items-center justify-center`}>
                      <div className={`w-2 h-2 ${color.text} rounded-full`}></div>
                    </div>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 bg-white shadow px-2 py-0.5 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlowSection;
