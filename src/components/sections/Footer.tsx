import { motion } from "framer-motion";
import {
  RiLeafLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiHeartLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 via-indigo-700/10 to-purple-700/20 blur-3xl opacity-30 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-500/40">
                <RiLeafLine className="text-white text-xl" />
              </div>
              <span className="text-2xl font-extrabold tracking-wide">
                LeaveFlow
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs">
              Transforming institutional leave management with AI-powered
              efficiency and enterprise-grade security.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <RiGithubLine />, link: "https://github.com/yourusername" },
                { icon: <RiLinkedinLine />, link: "https://linkedin.com/in/yourprofile" },
                { icon: <RiTwitterLine />, link: "https://twitter.com/yourprofile" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800/60 backdrop-blur rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {["Features", "Demo", "Technology", "Pricing", "Case Studies"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Tutorials", "Blog", "Support"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <RiMailLine className="text-blue-500" />
                <a
                  href="mailto:ankeetkumarsah@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ankeetkumarsah@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <RiPhoneLine className="text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <RiMapPinLine className="text-blue-500 mt-1" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-700/50">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
          >
            <span>© {currentYear} LeaveFlow. Made with</span>
            <RiHeartLine className="text-red-500 mx-1 animate-pulse" />
            <span>by Ankeet Kumar Sah</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-sm text-gray-400"
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all group-hover:w-full"></span>
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl transition-all z-50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
