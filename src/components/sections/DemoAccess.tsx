import { useState } from "react";
import { motion } from "framer-motion";
import { RiUserLine, RiUserStarLine, RiUserSettingsLine, RiUserHeartLine, RiAdminLine, RiShieldKeyholeLine, RiLoginBoxLine, RiMailSendLine, RiFileCopyLine, RiCheckLine, RiExternalLinkLine } from "react-icons/ri";

const DemoAccess = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "student",
    institution: "",
    purpose: ""
  });

  const demoCredentials = {
    student: {
      icon: <RiUserLine className="text-xl" />,
      role: "🎓 Student",
      email: "student.demo@leaveflow.com",
      password: "demo2024",
      access: "Apply & track leaves",
      color: "blue"
    },
    faculty: {
      icon: <RiUserStarLine className="text-xl" />,
      role: "👨‍🏫 Faculty",
      email: "faculty.demo@leaveflow.com",
      password: "demo2024",
      access: "Approve student requests",
      color: "green"
    },
    hod: {
      icon: <RiUserSettingsLine className="text-xl" />,
      role: "🏢 HOD",
      email: "hod.demo@leaveflow.com",
      password: "demo2024",
      access: "Department oversight",
      color: "purple"
    },
    warden: {
      icon: <RiUserHeartLine className="text-xl" />,
      role: "🏠 Warden",
      email: "warden.demo@leaveflow.com",
      password: "demo2024",
      access: "Hostel management",
      color: "orange"
    },
    admin: {
      icon: <RiAdminLine className="text-xl" />,
      role: "⚙️ Admin",
      email: "admin.demo@leaveflow.com",
      password: "demo2024",
      access: "Full system access",
      color: "indigo"
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" };
      case "green": return { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" };
      case "purple": return { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" };
      case "orange": return { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-orange-600" };
      case "indigo": return { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600" };
      default: return { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200", gradient: "from-gray-500 to-gray-600" };
    }
  };

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const copyAllCredentials = () => {
    const credential = demoCredentials[selectedRole as keyof typeof demoCredentials];
    const text = `Email: ${credential.email}\nPassword: ${credential.password}`;
    navigator.clipboard.writeText(text);
    setCopiedItem('all');
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you with custom demo access within 24 hours.");
    setShowCustomForm(false);
    setFormData({ name: "", email: "", role: "student", institution: "", purpose: "" });
  };

  const currentCredential = demoCredentials[selectedRole as keyof typeof demoCredentials];

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
     <div className="mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg">
            <RiLoginBoxLine className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience LeaveFlow with Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Live Demo
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Test drive the complete LeaveFlow system using the demo credentials below. Copy and paste them on the login page.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Access Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Demo Access Instructions</h3>
            
            {/* Step-by-step Guide */}
            <div className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-4">How to access the demo:</h4>
              <ol className="space-y-3 text-sm text-blue-800">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">1</span>
                  <span>Copy the credentials below for your desired role</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">2</span>
                  <span>Click the "Go to Login Page" button</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">3</span>
                  <span>Paste the credentials on the login page</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">4</span>
                  <span>Explore the demo environment (resets every 2 hours)</span>
                </li>
              </ol>
            </div>

            {/* Role Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Role to Test:</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(demoCredentials).map(([key, role]) => {
                  const roleColor = getColorClasses(role.color);
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedRole(key)}
                      className={`p-3 rounded-xl border transition-all duration-200 ${
                        selectedRole === key
                          ? `${roleColor.bg} ${roleColor.border} border-2 shadow-md`
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className={`w-8 h-8 ${roleColor.bg} rounded-lg flex items-center justify-center`}>
                          {role.icon}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-700">{role.role.split(' ')[1]}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Credentials Display */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Credentials for {currentCredential.role}</h4>
                <button
                  onClick={copyAllCredentials}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  {copiedItem === 'all' ? <RiCheckLine className="mr-1" /> : <RiFileCopyLine className="mr-1" />}
                  Copy All
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="font-mono text-sm">{currentCredential.email}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentCredential.email, 'email')}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy email"
                  >
                    {copiedItem === 'email' ? <RiCheckLine className="text-green-500" /> : <RiFileCopyLine />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500">Password</div>
                    <div className="font-mono text-sm">{currentCredential.password}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentCredential.password, 'password')}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy password"
                  >
                    {copiedItem === 'password' ? <RiCheckLine className="text-green-500" /> : <RiFileCopyLine />}
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500">Access Level</div>
                  <div className="text-sm text-gray-700">{currentCredential.access}</div>
                </div>
              </div>
            </div>

            {/* Login Page Button */}
            <motion.a
              href="/login" // Your actual login page URL
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-4"
            >
              <RiExternalLinkLine className="mr-2" />
              Go to Login Page
            </motion.a>

            {copiedItem && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 text-sm mb-4"
              >
                ✓ {copiedItem === 'all' ? 'Credentials copied!' : copiedItem === 'email' ? 'Email copied!' : 'Password copied!'}
              </motion.div>
            )}
          </motion.div>

          {/* Custom Access Form - Remains the same as before */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            {/* ... (Keep the custom access form exactly as before) ... */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <RiMailSendLine className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Need Custom Demo Access?</h3>
                <p className="text-gray-600">Get personalized credentials for extended testing</p>
              </div>
            </div>

            {!showCustomForm ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  For institutions wanting to thoroughly evaluate LeaveFlow, we provide customized demo access with:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Extended trial period (up to 7 days)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Customized institutional data setup
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Multiple role access for team testing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Technical support during evaluation
                  </li>
                </ul>
                <button
                  onClick={() => setShowCustomForm(true)}
                  className="w-full bg-blue-50 text-blue-600 py-3 px-6 rounded-xl font-medium hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
                >
                  Request Custom Demo Access
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@institution.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution/Organization *</label>
                  <input
                    type="text"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your institution name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Role to Test *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="hod">HOD/Department Head</option>
                    <option value="warden">Warden</option>
                    <option value="admin">Administrator</option>
                    <option value="multiple">Multiple Roles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Evaluation</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your evaluation needs..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCustomForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Security Assurance - Remains the same */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-200"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <RiShieldKeyholeLine className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">🔒 Secure Demo Environment</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Data Isolation</h4>
              <p className="text-sm">All demo activities are completely isolated from production data. Your testing won't affect real systems.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Automatic Reset</h4>
              <p className="text-sm">Demo data resets every 2 hours, ensuring a clean testing environment for all users.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Read-Only Mode</h4>
              <p className="text-sm">Critical operations are simulated - no actual changes are made to system configurations.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Monitoring</h4>
              <p className="text-sm">Our team monitors demo usage to prevent abuse and ensure optimal performance for all testers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoAccess;