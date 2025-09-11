import { motion, AnimatePresence } from "framer-motion";
import {
  RiReactjsLine,
  RiServerLine,
  RiCloudLine,
  RiShieldKeyholeLine,
  RiDatabase2Line,
  RiCodeSSlashLine,
  RiMailLine,
  RiFileExcelLine,
  RiGitBranchLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiCloudinary
} from "react-icons/si";
import { TypescriptIcon } from "./TechIcons";
import { useState } from "react";

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendTech = [
    {
      name: "React.js 19",
      icon: <SiReact className="text-blue-500 text-2xl" />,
      description: "Latest React with concurrent features",
      category: "frontend"
    },
    {
      name: "TypeScript",
      icon: <TypescriptIcon className="text-blue-600 text-2xl" />,
      description: "Type-safe development",
      category: "frontend"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 text-2xl" />,
      description: "Utility-first CSS framework",
      category: "frontend"
    },
    {
      name: "Framer Motion",
      icon: <RiReactjsLine className="text-purple-500 text-2xl" />,
      description: "Production-ready motion library",
      category: "frontend"
    },
    {
      name: "Zustand",
      icon: <RiDatabase2Line className="text-amber-700 text-2xl" />,
      description: "Lightweight state management",
      category: "frontend"
    },
    {
      name: "TanStack Query",
      icon: <RiCodeSSlashLine className="text-red-500 text-2xl" />,
      description: "Server state synchronization",
      category: "frontend"
    },
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 text-2xl" />,
      description: "Runtime environment",
      category: "backend"
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 text-2xl" />,
      description: "Minimal web framework",
      category: "backend"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-2xl" />,
      description: "NoSQL database with Mongoose ODM",
      category: "backend"
    },
    {
      name: "JWT Auth",
      icon: <RiShieldKeyholeLine className="text-yellow-500 text-2xl" />,
      description: "Secure authentication system",
      category: "backend"
    },
    {
      name: "Nodemailer",
      icon: <RiMailLine className="text-blue-400 text-2xl" />,
      description: "Email service with SMTP",
      category: "backend"
    },
    {
      name: "M ExcelJS",
      icon: <RiFileExcelLine className="text-green-500 text-2xl" />,
      description: "Excel processing",
      category: "backend"
    },
    {
      name: "Cloudinary",
      icon: <SiCloudinary className="text-blue-600 text-2xl" />,
      description: "File & media storage",
      category: "backend"
    },
  ];

  const deploymentTech = [
    {
      name: "Netlify",
      icon: <RiCloudLine className="text-blue-500 text-2xl" />,
      description: "Frontend hosting with CDN",
      category: "deployment"
    },
    {
      name: "Render",
      icon: <RiServerLine className="text-orange-500 text-2xl" />,
      description: "Backend deployment",
      category: "deployment"
    },
    {
      name: "MongoDB Atlas",
      icon: <SiMongodb className="text-green-500 text-2xl" />,
      description: "Managed database cluster",
      category: "deployment"
    },
    {
      name: "GitHub Actions",
      icon: <RiGitBranchLine className="text-gray-700 text-2xl" />,
      description: "Automated CI/CD pipelines",
      category: "deployment"
    },
  ];

  // Filter technologies based on active tab
  const filteredTech = 
    activeTab === "frontend" ? frontendTech :
    activeTab === "backend" ? backendTech :
    deploymentTech;

  type CardProps = {
    title: string;
    icon: React.ReactNode;
    subtitle: string;
    children: React.ReactNode;
  };

  const Card = ({ title, icon, subtitle, children }: CardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mr-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <h4 className="font-semibold text-gray-800 mb-4">{subtitle}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
    </motion.div>
  );

  return (
    <section
      id="technology"
      className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg border border-gray-100">
            <RiCodeSSlashLine className="text-indigo-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Modern Tech Stack
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            LeaveFlow leverages cutting-edge technologies to deliver a{" "}
            <span className="font-semibold text-indigo-600">
              scalable, secure
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-600">
              maintainable
            </span>{" "}
            leave management solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-lg border border-gray-100 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "frontend"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "backend"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("deployment")}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "deployment"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Deployment
            </button>
          </div>
        </motion.div>

        {/* Tech Cards - Show Filtered View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-10"
          >
            <Card
              title={
                activeTab === "frontend" ? "Frontend Architecture" :
                activeTab === "backend" ? "Backend Infrastructure" :
                "Deployment & DevOps"
              }
              icon={
                activeTab === "frontend" ? <RiReactjsLine className="text-blue-600 text-2xl" /> :
                activeTab === "backend" ? <RiServerLine className="text-green-600 text-2xl" /> :
                <RiCloudLine className="text-purple-600 text-2xl" />
              }
              subtitle={
                activeTab === "frontend" ? "React.js 19 & Ecosystem" :
                activeTab === "backend" ? "Node.js + Express.js" :
                "Cloud Infrastructure"
              }
            >
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-3 bg-gray-50 rounded-lg transition-colors ${
                    tech.category === "frontend" ? "hover:bg-indigo-50" :
                    tech.category === "backend" ? "hover:bg-green-50" :
                    "hover:bg-purple-50"
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    {tech.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {tech.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-gray-100 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            System Architecture Overview
          </h3>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex justify-center items-center md:p-10 p-2 mb-6">
           <div className="w-full p-2 bg-white rounded-2xl">
             <img className="w-full rounded-xl" src="../../../public/assets/Leave-Flow-Architecture.drawio.svg" alt=""/>
           </div>
          </div>
       
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;