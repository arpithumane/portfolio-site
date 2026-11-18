'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: 'Project One',
      description: 'An amazing project showcasing my skills and expertise',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Another great project with cutting-edge technologies',
      tags: ['Next.js', 'Framer Motion', 'Node.js'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Demonstrating full-stack capabilities and design thinking',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Building amazing digital experiences with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <p className="text-slate-400 mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <AnimatedSection
        id="projects"
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <motion.div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection
        id="blog"
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <motion.div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Latest Articles
          </h2>
          <p className="text-slate-400 text-lg">
            Thoughts on development, design, and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Blog Post {i}
              </h3>
              <p className="text-slate-400 mb-4">
                An insightful article about web development and modern technologies
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Read More →
              </a>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a passionate developer and designer crafting beautiful digital
              experiences. With expertise in modern web technologies, I create
              solutions that are both functional and delightful.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-slate-800 px-4 py-2 rounded text-white text-center"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-slate-400 mb-8 text-lg">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Send me an email
          </a>
        </motion.div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 border-t border-slate-700">
        <p>© 2024 My Portfolio. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
