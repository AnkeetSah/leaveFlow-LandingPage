import { motion } from "framer-motion";
import { RiSendPlaneLine, RiUserSearchLine, RiUserSettingsLine, RiHomeGearLine, RiCheckboxCircleLine, RiQrCodeLine } from "react-icons/ri";

const WorkflowSection = () => {
  const workflowSteps = [
    {
      icon: <RiSendPlaneLine className="text-2xl" />,
      title: "Submit Request",
      description: "Users create a leave request with validations and required details through an intuitive form with AI assistance.",
      color: "blue",
      features: ["AI form assistant", "Automatic validation", "Required attachments", "Instant confirmation"]
    },
    {
      icon: <RiUserSearchLine className="text-2xl" />,
      title: "Faculty Review",
      description: "Smart routing to reviewer(s) with SLAs, workload balancing, and optional remarks for context.",
      color: "green",
      features: ["Workload-aware routing", "48-hour SLA", "Remarks system", "Mobile approval"]
    },
    {
      icon: <RiUserSettingsLine className="text-2xl" />,
      title: "HOD Approval",
      description: "Department oversight ensures policy compliance, budget considerations, and handles escalations when needed.",
      color: "purple",
      features: ["Policy compliance checks", "Budget monitoring", "Escalation handling", "Department analytics"]
    },
    {
      icon: <RiHomeGearLine className="text-2xl" />,
      title: "Warden Clearance",
      description: "Hostel-level checks, parent notifications, and gate-pass coordination for complete transparency.",
      color: "orange",
      features: ["Hostel rules validation", "Parent notifications", "Gate-pass generation", "Emergency contact sync"]
    },
    {
      icon: <RiCheckboxCircleLine className="text-2xl" />,
      title: "Final Status & Audit",
      description: "Approved/Rejected with full audit trail, comprehensive notifications, and digital documentation.",
      color: "indigo",
      features: ["Complete audit trail", "Multi-channel notifications", "Digital documentation", "Export capabilities"]
    },
    {
      icon: <RiQrCodeLine className="text-2xl" />,
      title: "Campus Exit Verification",
      description: "Security guards scan QR codes to verify approved leaves before allowing students to exit campus.",
      color: "red",
      features: ["QR code verification", "Real-time validation", "Exit timestamp", "Security alerts"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          gradient: "from-blue-500 to-blue-600"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          border: "border-green-200",
          gradient: "from-green-500 to-green-600"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          border: "border-purple-200",
          gradient: "from-purple-500 to-purple-600"
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          border: "border-orange-200",
          gradient: "from-orange-500 to-orange-600"
        };
      case "indigo":
        return {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          border: "border-indigo-200",
          gradient: "from-indigo-500 to-indigo-600"
        };
      case "red":
        return {
          bg: "bg-red-100",
          text: "text-red-600",
          border: "border-red-200",
          gradient: "from-red-500 to-red-600"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          border: "border-gray-200",
          gradient: "from-gray-500 to-gray-600"
        };
    }
  };

  return (
    <section id="workflow" className="py-20 bg-white">
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
            <RiSendPlaneLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent, configurable{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              workflow
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From submission to campus exit, every step is tracked and auditable with automated notifications and complete visibility.
          </p>
        </motion.div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-green-200 to-red-200 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {workflowSteps.map((step, index) => {
              const color = getColorClasses(step.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'} mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center mr-4`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 ${color.bg} rounded-full mr-2`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Indicator */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-6 h-6 ${color.bg} rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 relative`}>
                      <div className={`w-2 h-2 ${color.text} rounded-full`}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs font-semibold text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm -mt-10">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="lg:hidden w-full"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <RiCheckboxCircleLine className="text-blue-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Complete Audit Trail</h4>
            <p className="text-gray-600 text-sm">Every action is logged with timestamps and user details for full transparency.</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <RiSendPlaneLine className="text-green-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Automated Notifications</h4>
            <p className="text-gray-600 text-sm">Real-time alerts via email, SMS, and in-app notifications for all stakeholders.</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-2xl">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <RiQrCodeLine className="text-purple-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">QR Code Verification</h4>
            <p className="text-gray-600 text-sm">Secure campus exit process with scannable QR codes and real-time validation.</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to streamline your leave process?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the complete, transparent workflow that reduces processing time and improves accountability.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              See Workflow in Action
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;