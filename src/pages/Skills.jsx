import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      className="w-full py-12 bg-gray-50 text-gray-800 px-4 md:px-8 flex items-center justify-center"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Software Engineering */}
          <motion.div
            className="p-5 bg-white rounded-xl shadow-lg border-l-8 border-blue-500"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Software Engineering
              </h3>
            </div>
            <ul className="space-y-1 text-sm">
              {[
                "Languages: Java, Python, C++, JavaScript, Go, Rust",
                "Frameworks: React, Next.js, Node.js, Spring Boot, MongoDB",
                "Systems Programming: Assembly, RISC-V, Unix (C, POSIX)",
                "Projects: Cush shell implementation, REST API design",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Blockchain & DApps */}
          <motion.div
            className="p-5 bg-white rounded-xl shadow-lg border-l-8 border-indigo-500"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-0">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Blockchain & DApps
              </h3>
            </div>
            <ul className="space-y-1 text-sm">
              {[
                "Forever Storage: full-stack Solidity/Node.js solution",
                "Smart Contracts: encryption, access rights, file storage",
                "Web3 tools: Hardhat, Ethers.js, MetaMask integration",
                "Testnet deployment and CI-driven contract verification",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Machine Learning */}
          <motion.div
            className="p-5 bg-white rounded-xl shadow-lg border-l-8 border-emerald-500"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-0">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6M9 12l3-3 3 3"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Machine Learning
              </h3>
            </div>
            <ul className="space-y-1 text-sm">
              {[
                "Fraud Detection: decision trees & logistic regression",
                "Neural Networks: NumPy, PyTorch implementations",
                "Data preprocessing: sampling, feature engineering",
                "Evaluation: cross-validation, precision, recall, AUPRC",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 text-emerald-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cybersecurity & Cloud */}
          <motion.div
            className="p-5 bg-white rounded-xl shadow-lg border-l-8 border-violet-500"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-0">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c-4 0-8 2-8 6v3h16v-3c0-4-4-6-8-6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 7a4 4 0 10-4 4h8a4 4 0 00-4-4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Cybersecurity & Cloud
              </h3>
            </div>
            <ul className="space-y-1 text-sm">
              {[
                "Information Security Intern @ Triple Point Security",
                "Tools: AWS CLI, Azure, Terraform, Docker, Kubernetes",
                "Pentesting: risk assessments, Wireshark, Nmap, Burp Suite",
                "Infra: IAM, VPC, EC2 provisioning, security automation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 text-violet-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
