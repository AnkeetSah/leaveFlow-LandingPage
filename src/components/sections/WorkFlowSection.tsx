import { motion } from "framer-motion";
import {
  RiSendPlaneLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiHomeGearLine,
  RiCheckboxCircleLine,
  RiQrCodeLine,
  RiArrowRightLine,
  RiPlayCircleLine
} from "react-icons/ri";

const WorkFlowSection = () => {
  const workflowSteps = [
    {
      icon: <RiSendPlaneLine className="text-2xl" />,
      title: "Submit Request",
      description: "Users create a leave request with validations and required details through an intuitive form with AI assistance.",
      color: "blue",
      features: ["AI form assistant", "Automatic validation", "Required attachments", "Instant confirmation"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <RiUserSearchLine className="text-2xl" />,
      title: "Faculty Review",
      description: "Smart routing to reviewer(s) with SLAs, workload balancing, and optional remarks for context.",
      color: "green",
      features: ["Workload-aware routing", "48-hour SLA", "Remarks system", "Mobile approval"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <RiUserSettingsLine className="text-2xl" />,
      title: "HOD Approval",
      description: "Department oversight ensures policy compliance, budget considerations, and handles escalations when needed.",
      color: "purple",
      features: ["Policy compliance checks", "Budget monitoring", "Escalation handling", "Department analytics"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <RiHomeGearLine className="text-2xl" />,
      title: "Warden Clearance",
      description: "Hostel-level checks, parent notifications, and gate-pass coordination for complete transparency.",
      color: "orange",
      features: ["Hostel rules validation", "Parent notifications", "Gate-pass generation", "Emergency contact sync"],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <RiCheckboxCircleLine className="text-2xl" />,
      title: "Final Status & Audit",
      description: "Approved/Rejected with full audit trail, comprehensive notifications, and digital documentation.",
      color: "indigo",
      features: ["Complete audit trail", "Multi-channel notifications", "Digital documentation", "Export capabilities"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <RiQrCodeLine className="text-2xl" />,
      title: "Campus Exit Verification",
      description: "Security guards scan QR codes to verify approved leaves before allowing students to exit campus.",
      color: "red",
      features: ["QR code verification", "Real-time validation", "Exit timestamp", "Security alerts"],
      gradient: "from-red-500 to-rose-500"
    },
  ];

  return (
    <section id="workflow" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <RiPlayCircleLine className="text-white text-3xl" />
          </motion.div>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Seamless Workflow
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Intelligent
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Process Flow
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of leave management with our beautifully designed, 
            fully automated workflow system.
          </p>
        </motion.div>

        {/* Modern Workflow Timeline */}
        <div className="relative">
          {/* Central Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 transform -translate-x-1/2 rounded-full">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full origin-top"
            />
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8 lg:space-y-12">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  } gap-8`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className={`lg:w-1/2 ${
                      isEven ? "lg:pl-12" : "lg:pr-12"
                    } group cursor-pointer`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 relative overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            {step.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">Step {index + 1}</span>
                              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-500">Automated</span>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-gray-400 group-hover:text-blue-600 transition-colors mt-2"
                        >
                          <RiArrowRightLine className="text-2xl" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                        {step.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-3 relative z-10">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-2 p-3 bg-white rounded-xl hover:bg-gray-50 transition-colors group/feature border border-gray-100"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full`} />
                            <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 rounded-full border-2 border-white/50"
                      />
                    </motion.div>
                    
                    {/* Connection Line for Mobile */}
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-200 to-indigo-200 rounded-full">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="w-full h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full origin-top"
                      />
                    </div>
                  </div>

                  {/* Spacer for alternating sides */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Ready to Streamline Your Process?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Experience the power of automated workflow management with zero setup time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
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
                View Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
    </section>
  );
};

export default WorkFlowSection;