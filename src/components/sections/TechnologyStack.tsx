import { motion } from "framer-motion";
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

const TechnologyStack = () => {
  const frontendTech = [
    {
      name: "React.js 19",
      icon: <SiReact className="text-blue-500 text-2xl" />,
      description: "Latest React with concurrent features",
    },
    {
      name: "TypeScript",
      icon: <TypescriptIcon className="text-blue-600 text-2xl" />,
      description: "Type-safe development",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 text-2xl" />,
      description: "Utility-first CSS framework",
    },
    {
      name: "Framer Motion",
      icon: <RiReactjsLine className="text-purple-500 text-2xl" />,
      description: "Production-ready motion library",
    },
    {
      name: "Zustand",
      icon: <RiDatabase2Line className="text-amber-700 text-2xl" />,
      description: "Lightweight state management",
    },
    {
      name: "TanStack Query",
      icon: <RiCodeSSlashLine className="text-red-500 text-2xl" />,
      description: "Server state synchronization",
    },
   
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 text-2xl" />,
      description: "Runtime environment",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 text-2xl" />,
      description: "Minimal web framework",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-2xl" />,
      description: "NoSQL database with Mongoose ODM",
    },
    {
      name: "JWT Auth",
      icon: <RiShieldKeyholeLine className="text-yellow-500 text-2xl" />,
      description: "Secure authentication system",
    },
    {
      name: "Nodemailer",
      icon: <RiMailLine className="text-blue-400 text-2xl" />,
      description: "Email service with SMTP",
    },
    {
      name: "M ExcelJS",
      icon: <RiFileExcelLine className="text-green-500 text-2xl" />,
      description: "Excel processing",
    },
    {
    name: "Cloudinary",
    icon: <SiCloudinary className="text-blue-600 text-2xl" />,
    description: "File & media storage",
  },
  ];

  const deploymentTech = [
    {
      name: "Netlify",
      icon: <RiCloudLine className="text-blue-500 text-2xl" />,
      description: "Frontend hosting with CDN",
    },
    {
      name: "Render",
      icon: <RiServerLine className="text-orange-500 text-2xl" />,
      description: "Backend deployment",
    },
    {
      name: "MongoDB Atlas",
      icon: <SiMongodb className="text-green-500 text-2xl" />,
      description: "Managed database cluster",
    },
  
    {
      name: "GitHub Actions",
      icon: <RiGitBranchLine className="text-gray-700 text-2xl" />,
      description: "Automated CI/CD pipelines",
    },
  ];

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

        {/* Tech Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          <Card
            title="Frontend Architecture"
            icon={<RiReactjsLine className="text-blue-600 text-2xl" />}
            subtitle="React.js 19 & Ecosystem"
          >
            {frontendTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
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

          <Card
            title="Backend Infrastructure"
            icon={<RiServerLine className="text-green-600 text-2xl" />}
            subtitle="Node.js + Express.js"
          >
            {backendTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
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

          <Card
            title="Deployment & DevOps"
            icon={<RiCloudLine className="text-purple-600 text-2xl" />}
            subtitle="Cloud Infrastructure"
          >
            {deploymentTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
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
        </div>

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
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-10 mb-6">
            <RiCloudLine className="text-5xl text-indigo-500 mx-auto mb-3" />
            <p className="text-gray-600">Architecture diagram placeholder</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            View Technical Architecture
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
