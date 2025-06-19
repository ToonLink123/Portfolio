// src/components/Projects.jsx

import React from 'react';

const tagColors = {
  'Software Engineering': 'bg-blue-100',
  'ML': 'bg-green-100',
  'Cybersecurity': 'bg-red-100',
  'Game Dev': 'bg-purple-100',
  'default': 'bg-gray-100'
};

const projects = [
  {
    title: 'Cush',
    description:
      'Engineered robust job control and process management by handling asynchronous signals (e.g., SIGCHLD, SIGINT, SIGTSTP). Implemented built-in commands (jobs, fg, bg, kill, stop, exit) and managed process groups for effective foreground/background execution. Addressed race conditions by strategically blocking/unblocking signals during critical operations to maintain terminal state integrity.',
    tags: ['Software Engineering'],
    date: '2025-02-01',
    private: true
  },
  {
    title: 'EZCITE',
    description:
      'A powerful tool to simplify finding and citing relevant sources for academic papers. User enters a prompt and citation format; the AI backend scrapes and returns properly formatted citations via a React frontend.',
    tags: ['Software Engineering'],
    date: '2025-01-15',
    link: 'https://github.com/ToonLink123/ezcite'
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
      'Developed custom machine learning models from scratch using Python and Pandas to detect fraudulent transactions on a highly imbalanced dataset. Implemented a C4.5 decision tree and a logistic regression via gradient descent. Applied under-sampling, hyperparameter tuning, and fixed random seeds for reproducibility.',
    tags: ['ML'],
    date: '2024-09-01',
    link: 'https://github.com/ToonLink123/Credit-Card-Fraud-Detection'
  },
  {
    title: 'Forever Storage',
    description:
      'Blockchain-based full-stack solution for cost-effective file storage. Implemented encryption and secure authentication, plus smart contracts to manage file storage, access rights, and user interactions.',
    tags: ['Software Engineering'],
    date: '2024-05-01',
    private: true
  }
];

const sortedProjects = [...projects].sort((a, b) => {
  const aIsWip = !a.link && !a.private;
  const bIsWip = !b.link && !b.private;
  if (aIsWip && !bIsWip) return 1;
  if (bIsWip && !aIsWip) return -1;
  return new Date(b.date) - new Date(a.date);
});

export default function Projects() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-2 gap-8">
          {sortedProjects.map((project, idx) => {
            const tag = project.tags?.[0] || 'default';
            const bgColor = tagColors[tag] || tagColors.default;

            return (
              <div
                key={idx}
                className={`w-full max-w-[22rem] rounded-2xl p-6 shadow ${bgColor} transition hover:shadow-lg mx-auto`}
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View on GitHub
                  </a>
                ) : project.private ? (
                  <span className="flex items-center text-gray-600 italic">
                    <span className="mr-1">🔒</span>Private Repository
                  </span>
                ) : (
                  <span className="text-gray-600 italic">🚧 Work in Progress</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
