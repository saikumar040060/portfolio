import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPython, FaReact, FaDatabase, FaServer, FaGithub, FaLinkedin, 
  FaFileDownload, FaEye, FaPaperPlane, FaExternalLinkAlt, FaCode 
} from 'react-icons/fa';
import { SiDjango, SiPostgresql } from 'react-icons/si';
import { FaMicrosoft, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import Navbar from './Navbar';

function HomePage() {
  const { darkMode } = useContext(ThemeContext);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const texts = [
    "Building secure web applications",
    "Python + Django specialist",
    "React enthusiast",
    "Problem solver",
    "Full stack developer"
  ]; 

  const techStack = [
    { icon: <FaPython size={40} />, name: "Python", description: "2.5+ years experience building scalable applications" },
    { icon: <SiDjango size={40} />, name: "Django", description: "Expert in building secure backend systems" },
    { icon: <FaReact size={40} />, name: "React", description: "Modern, responsive frontend development" },
    { icon: <SiPostgresql size={40} />, name: "PostgreSQL", description: "Relational database design and optimization" },
    { icon: <FaServer size={40} />, name: "REST APIs", description: "Designing clean, documented API interfaces" },
    { icon: <FaMicrosoft size={40} />, name: "Azure", description: "Cloud deployment and management" }
  ];

  const projects = [
    {
      id: 1,
      title: "Bank Statement Aggregator",
      description: "A secure financial dashboard that consolidates transactions from multiple banks into a single interface.",
      technologies: ["Python", "Django", "React", "PostgreSQL", "JWT Auth"],
      imageUrl: "https://via.placeholder.com/500x350",
      category: "fullstack"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Complete online shopping solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      imageUrl: "https://via.placeholder.com/500x350",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Interactive personal portfolio with animations and dark mode.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://via.placeholder.com/500x350",
      category: "frontend"
    }
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === texts[textIndex].length) {
        setIsDeleting(true);
        setTimeout(() => {}, 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      } else {
        setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900 transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <header id="home" className="relative bg-gradient-to-br from-gray-900 to-black dark:from-gray-100 dark:to-white text-white dark:text-black py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-orange-400/20 dark:bg-orange-600/20"
                initial={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  width: Math.random() * 10 + 2,
                  height: Math.random() * 10 + 2,
                  opacity: 0
                }}
                animate={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: [0, 0.2, 0],
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-orange-400 dark:text-orange-600"
            >
              <span className="inline-block">Hi, I'm</span> <br />
              Satya Sai Kumar <br />
              Dwarapureddy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl mb-8 text-gray-300 dark:text-gray-700"
            >
              Full Stack Developer <span className="text-orange-400 dark:text-orange-600">•</span> Python Specialist <span className="text-orange-400 dark:text-orange-600">•</span> Problem Solver
            </motion.p>
            
            <div className="h-16 text-2xl md:text-3xl mb-8 font-light text-orange-300 dark:text-orange-500">
              {texts[textIndex].substring(0, charIndex)}
              <span className="animate-pulse">|</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(255,165,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-orange-400 dark:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-300 dark:hover:bg-orange-500 transition-colors flex items-center gap-2"
              >
                <FaEye className="inline" /> View My Work
              </motion.a>
              <motion.a
                whileHover={{ y: -3, backgroundColor: "#f97316", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                href="/satya_resume.pdf"
                download="Satya_Sai_Kumar_Resume.pdf"
                className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center gap-2"
              >
                <FaFileDownload className="inline" /> Download Resume
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <div className="text-gray-400 dark:text-gray-600 text-sm mb-2">Scroll down</div>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto relative">
                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full absolute top-2 left-1/2 -translate-x-1/2"
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black dark:from-gray-100 dark:to-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-2 text-center text-orange-400 dark:text-orange-600"
            >
              My Tech Stack
            </motion.h2>
            <p className="text-gray-400 dark:text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Technologies I've mastered and use regularly to build powerful applications
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-md cursor-default relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 dark:from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-orange-400 dark:text-orange-600 mb-4 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="font-medium text-white dark:text-black text-center">{tech.name}</h3>
                  
                  {hoveredTech === tech.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-full p-4 bg-gray-900 dark:bg-gray-100 text-gray-300 dark:text-gray-700 text-sm mt-2 rounded-b-lg shadow-lg"
                    >
                      {tech.description}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-700 mb-6 text-center">Proficiency Levels</h3>
              {[
                { name: "Python/Django", level: 90 },
                { name: "React", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Azure", level: 75 },
                { name: "REST APIs", level: 85 }
              ].map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 dark:text-gray-700">{skill.name}</span>
                    <span className="text-orange-400 dark:text-orange-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800/50 dark:bg-gray-200/50 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-400/10 dark:bg-orange-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-400/10 dark:bg-orange-600/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-1 rounded-full">
                  <div className="bg-gray-900 dark:bg-white p-1 rounded-full">
                    <img 
                      src="https://via.placeholder.com/400x400" 
                      alt="Profile" 
                      className="rounded-full w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              <div className="md:w-2/3">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-8 text-orange-400 dark:text-orange-600"
                >
                  About Me
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 dark:text-gray-700 mb-6 text-lg leading-relaxed"
                >
                  I'm a passionate full stack developer with a focus on building secure and scalable web applications.
                  With expertise in Python, Django, React, and cloud technologies like Azure, I love transforming ideas into functional, elegant digital solutions.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 dark:text-gray-700 mb-8 text-lg leading-relaxed"
                >
                  My journey in software development began 2.5 years ago, and since then I've helped numerous clients build robust applications that solve real-world problems. When I'm not coding, you can find me contributing to open-source projects or learning about new technologies.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-4 flex-1 min-w-[200px]">
                    <div className="text-orange-400 dark:text-orange-600 text-3xl font-bold mb-2">2.5+</div>
                    <div className="text-gray-300 dark:text-gray-700">Years Experience</div>
                  </div>
                  
                  <div className="bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-4 flex-1 min-w-[200px]">
                    <div className="text-orange-400 dark:text-orange-600 text-3xl font-bold mb-2">20+</div>
                    <div className="text-gray-300 dark:text-gray-700">Projects Completed</div>
                  </div>
                  
                  <div className="bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-4 flex-1 min-w-[200px]">
                    <div className="text-orange-400 dark:text-orange-600 text-3xl font-bold mb-2">100%</div>
                    <div className="text-gray-300 dark:text-gray-700">Client Satisfaction</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-900 dark:bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-2 text-center text-orange-400 dark:text-orange-600"
            >
              Featured Projects
            </motion.h2>
            <p className="text-gray-400 dark:text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Some of my best work and contributions
            </p>
            
            <div className="flex justify-center gap-4 mb-12">
              {['all', 'fullstack', 'frontend'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full font-medium capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-orange-400 dark:bg-orange-600 text-black shadow-lg shadow-orange-400/30' 
                      : 'bg-gray-800 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800 dark:bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-700 dark:border-gray-200 hover:border-orange-400/30 dark:hover:border-orange-600/30 transition-all group"
                  >
                    <div className="h-48 bg-gray-700 dark:bg-gray-200 overflow-hidden relative">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white dark:text-black">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 dark:text-gray-700 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-orange-400/20 dark:bg-orange-600/20 text-orange-400 dark:text-orange-600 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className="text-sm bg-orange-400 dark:bg-orange-600 text-black px-4 py-2 rounded-full font-medium flex items-center gap-2"
                        >
                          <FaExternalLinkAlt size={12} /> View Live
                        </motion.a>
                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className="text-sm border border-gray-600 dark:border-gray-400 text-gray-300 dark:text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 flex items-center gap-2"
                        >
                          <FaCode size={12} /> Source Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 text-center"
            >
              <h3 className="text-xl text-gray-300 dark:text-gray-700 mb-4">Want to see more of my work?</h3>
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(255,165,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block bg-orange-400 dark:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-300 dark:hover:bg-orange-500 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-4 bg-gray-800 dark:bg-gray-200">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-400 dark:text-orange-600"
            >
              My Resume
            </motion.h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-900 dark:bg-white p-4 rounded-lg shadow-xl border border-gray-700 dark:border-gray-300">
                  <img 
                    src="/resume-preview.jpg" 
                    alt="Resume Preview" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white dark:text-black">Key Highlights</h3>
                <ul className="text-gray-300 dark:text-gray-700 mb-6 space-y-2">
                  <li>• 2+ years Python/Django experience</li>
                  <li>• Full stack development expertise</li>
                  <li>• REST API & database design</li>
                  <li>• React.js frontend development</li>
                  <li>• Azure cloud certified</li>
                </ul>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="/satya_resume.pdf"
                    download="Satya_Sai_Kumar_Resume.pdf"
                    className="bg-orange-400 dark:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-300 dark:hover:bg-orange-500 transition-colors flex items-center gap-2"
                  >
                    <FaFileDownload size={16} /> Download Full Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-100 dark:to-white text-white dark:text-black py-12 px-4 border-t border-gray-800 dark:border-gray-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 dark:text-orange-600 mb-2">Satya Sai Kumar Dwarapureddy</h3>
                <p className="text-gray-400 dark:text-gray-600">Full Stack Developer</p>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="text-gray-300 dark:text-gray-700 mb-2">Let's connect</div>
                <div className="flex gap-6">
                  <motion.a
                    whileHover={{ y: -3, color: "#f97316" }}
                    href="https://github.com/saikumar040060"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-700 hover:text-orange-400 dark:hover:text-orange-600 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, color: "#f97316" }}
                    href="https://www.linkedin.com/in/dwarapureddysaikumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-700 hover:text-orange-400 dark:hover:text-orange-600 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, color: "#f97316" }}
                    href="mailto:saikumar040060@gmail.com"
                    className="text-gray-300 dark:text-gray-700 hover:text-orange-400 dark:hover:text-orange-600 transition-colors"
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, color: "#f97316" }}
                    href="/satya_resume.pdf"
                    download="Satya_Sai_Kumar_Resume.pdf"
                    className="text-gray-300 dark:text-gray-700 hover:text-orange-400 dark:hover:text-orange-600 transition-colors"
                  >
                    <FaFileDownload size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-200 text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Satya Sai Kumar. All rights reserved.</p>
              <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;