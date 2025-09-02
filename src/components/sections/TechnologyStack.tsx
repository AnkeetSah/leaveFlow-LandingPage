import { motion } from "framer-motion";
import { RiReactjsLine, RiServerLine, RiCloudLine, RiShieldKeyholeLine, RiDatabase2Line, RiCodeSSlashLine, RiMailLine, RiFileExcelLine, RiShieldCheckLine, RiFileListLine, RiDashboardLine, RiGitBranchLine, RiCakeLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { TypescriptIcon } from "./TechIcons";

// You'll need to create a TechIcons.js file with these components or use react-icons
// For this example, I'll use placeholder divs - you should replace with actual icons

const TechnologyStack = () => {
  const frontendTech = [
    { name: "React.js 19", icon: <SiReact className="text-blue-500 text-2xl" />, description: "Latest React with concurrent features" },
    { name: "TypeScript", icon: <TypescriptIcon className="text-blue-600 text-2xl" />, description: "Type-safe development" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-2xl" />, description: "Utility-first CSS framework" },
    { name: "Framer Motion", icon: <RiReactjsLine className="text-purple-500 text-2xl" />, description: "Production-ready motion library" },
    { name: "Zustand", icon: <RiDatabase2Line className="text-brown-500 text-2xl" />, description: "State management solution" },
    { name: "TanStack Query", icon: <RiCodeSSlashLine className="text-red-500 text-2xl" />, description: "Server state management" },
    { name: "React Hook Form", icon: <RiCodeSSlashLine className="text-pink-500 text-2xl" />, description: "Form handling with Zod validation" },
    { name: "PWA Support", icon: <RiCloudLine className="text-blue-400 text-2xl" />, description: "Service Workers + Workbox" }
  ];

  const backendTech = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-2xl" />, description: "Runtime environment" },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 text-2xl" />, description: "Web application framework" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" />, description: "NoSQL database with Mongoose ODM" },
    { name: "JWT + OTP", icon: <RiShieldKeyholeLine className="text-yellow-500 text-2xl" />, description: "Authentication system" },
    { name: "Nodemailer", icon: <RiMailLine className="text-blue-400 text-2xl" />, description: "Email service with SMTP" },
    { name: "Multer + ExcelJS", icon: <RiFileExcelLine className="text-green-500 text-2xl" />, description: "File processing capabilities" },
    { name: "Security Suite", icon: <RiShieldCheckLine className="text-red-500 text-2xl" />, description: "Helmet, CORS, Rate Limiting" },
    { name: "Winston + Morgan", icon: <RiFileListLine className="text-purple-500 text-2xl" />, description: "Logging and monitoring" }
  ];

  const deploymentTech = [
    { name: "Vercel/Netlify", icon: <RiCloudLine className="text-blue-500 text-2xl" />, description: "Frontend deployment with CDN" },
    { name: "AWS/Railway", icon: <RiServerLine className="text-orange-500 text-2xl" />, description: "Backend with auto-scaling" },
    { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-500 text-2xl" />, description: "Managed database with clustering" },
    { name: "Performance Monitoring", icon: <RiDashboardLine className="text-purple-500 text-2xl" />, description: "Application performance tracking" },
    { name: "GitHub Actions", icon: <RiGitBranchLine className="text-gray-700 text-2xl" />, description: "CI/CD automated pipeline" },
    { name: "Docker", icon: <RiCakeLine className="text-blue-400 text-2xl" />, description: "Containerization for deployment" }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
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
            <RiCodeSSlashLine className="text-indigo-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built with Modern{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            LeaveFlow leverages cutting-edge technologies to deliver a robust, scalable, and maintainable leave management solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <RiReactjsLine className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Frontend Architecture</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">React.js 19</h4>
              <div className="grid grid-cols-2 gap-3">
                {frontendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-2">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-600">{tech.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <RiServerLine className="text-green-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Backend Infrastructure</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Node.js + Express.js</h4>
              <div className="grid grid-cols-2 gap-3">
                {backendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-2">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-600">{tech.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Deployment & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <RiCloudLine className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Deployment & DevOps</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Cloud Infrastructure</h4>
              <div className="grid grid-cols-2 gap-3">
                {deploymentTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-2">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-600">{tech.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Full-Stack MERN Application</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              LeaveFlow is built on the complete MERN stack, demonstrating expertise in modern full-stack development practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <SiMongodb className="text-green-400 text-3xl mx-auto mb-2" />
              <div className="font-semibold">MongoDB</div>
              <div className="text-sm text-indigo-200">Database</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <SiExpress className="text-gray-100 text-3xl mx-auto mb-2" />
              <div className="font-semibold">Express.js</div>
              <div className="text-sm text-indigo-200">Backend Framework</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <SiReact className="text-blue-400 text-3xl mx-auto mb-2" />
              <div className="font-semibold">React</div>
              <div className="text-sm text-indigo-200">Frontend Library</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <SiNodedotjs className="text-green-500 text-3xl mx-auto mb-2" />
              <div className="font-semibold">Node.js</div>
              <div className="text-sm text-indigo-200">Runtime Environment</div>
            </div>
          </div>
        </motion.div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">System Architecture Overview</h3>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="text-gray-500 mb-4">
              <RiCloudLine className="text-4xl mx-auto mb-2" />
              <p>Architecture diagram would be displayed here</p>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              View Technical Architecture
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;