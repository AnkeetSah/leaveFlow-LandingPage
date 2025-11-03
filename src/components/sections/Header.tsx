import { useState, useEffect } from "react";
import {
  RiLeafLine,
  RiCloseLine,
  RiMenuLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Technology", href: "#technology" },
    { name: "WorkFlow", href: "#workflow" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Animated gradient bar under header */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-indigo-400/50 transition-all"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 8px 30px rgba(99,102,241,0.4)",
            }}
          >
            <RiLeafLine className="text-white text-xl" />
          </motion.div>
          <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            LeaveFlow
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
              className="relative"
            >
              <motion.a
                href={item.href}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-500"
                }`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.a>
            </motion.div>
          ))}

          <motion.a
            href="#requestdemo"
            className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md flex items-center space-x-1 hover:shadow-indigo-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            role="button"
          >
            Request Demo
            <RiArrowRightUpLine className="text-lg" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-3 rounded-xl bg-gray-50 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 shadow-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <RiCloseLine size={24} />
            ) : (
              <RiMenuLine size={24} />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[72px] bg-white backdrop-blur-lg z-40 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="container bg-white mx-auto px-6 py-4 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold shadow-md mt-4 flex items-center justify-center hover:shadow-indigo-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#requestdemo"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo <RiArrowRightUpLine className="ml-1" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
