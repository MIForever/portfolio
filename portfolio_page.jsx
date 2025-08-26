"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ExternalLink,
  Database,
  Brain,
  Server,
  Cloud,
  Shield,
  Cpu,
  Layers,
  Download,
  Rocket,
} from "lucide-react"
import { useRef, useEffect, useState, useMemo } from "react"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const projects = [
    {
      title: "Neural Trading Engine",
      description:
        "High-frequency trading system with deep learning models achieving 94% accuracy in market predictions.",
      tech: ["Python", "TensorFlow", "Redis", "WebSocket"],
      icon: Brain,
      gradient: "from-purple-900/40 via-blue-900/30 to-indigo-900/40",
      status: "Production",
      metrics: "94% Accuracy",
      image: "/placeholder.svg?height=200&width=400&text=Neural+Trading+Dashboard",
    },
    {
      title: "Distributed ML Pipeline",
      description: "Scalable machine learning infrastructure processing 50M+ data points with real-time inference.",
      tech: ["Kubernetes", "Apache Kafka", "PyTorch", "Docker"],
      icon: Layers,
      gradient: "from-slate-900/40 via-gray-800/30 to-blue-900/40",
      status: "Active",
      metrics: "50M+ Data Points",
      image: "/placeholder.svg?height=200&width=400&text=ML+Pipeline+Architecture",
    },
    {
      title: "Microservices Architecture",
      description: "Cloud-native backend system handling 500K+ concurrent users with 99.99% uptime.",
      tech: ["Go", "gRPC", "PostgreSQL", "AWS"],
      icon: Server,
      gradient: "from-gray-900/40 via-slate-800/30 to-cyan-900/40",
      status: "Production",
      metrics: "99.99% Uptime",
      image: "/placeholder.svg?height=200&width=400&text=Microservices+Dashboard",
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time data processing engine with predictive analytics and automated insights generation.",
      tech: ["FastAPI", "MongoDB", "Celery", "ElasticSearch"],
      icon: Database,
      gradient: "from-indigo-900/40 via-purple-800/30 to-pink-900/40",
      status: "Beta",
      metrics: "Real-time Processing",
      image: "/placeholder.svg?height=200&width=400&text=Analytics+Interface",
    },
    {
      title: "Blockchain Infrastructure",
      description: "Decentralized application backend with smart contract integration and DeFi protocols.",
      tech: ["Solidity", "Web3.js", "Node.js", "IPFS"],
      icon: Shield,
      gradient: "from-emerald-900/40 via-teal-800/30 to-cyan-900/40",
      status: "Development",
      metrics: "DeFi Integration",
      image: "/placeholder.svg?height=200&width=400&text=Blockchain+Network",
    },
    {
      title: "Edge Computing Platform",
      description: "Low-latency computing platform for IoT devices with distributed processing capabilities.",
      tech: ["Rust", "MQTT", "InfluxDB", "Kubernetes"],
      icon: Cpu,
      gradient: "from-orange-900/40 via-red-800/30 to-pink-900/40",
      status: "Research",
      metrics: "<10ms Latency",
      image: "/placeholder.svg?height=200&width=400&text=Edge+Computing+Nodes",
    },
  ]

  const technologiesByCategory = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      techs: ["Python", "Go", "Node.js", "Rust", "Java", "C++", "FastAPI", "Express.js"],
    },
    {
      category: "AI/ML",
      techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain", "Keras"],
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "InfluxDB", "Neo4j"],
    },
    {
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus"],
    },
    {
      category: "Cloud",
      techs: ["AWS", "Google Cloud", "Azure", "Vercel", "DigitalOcean"],
    },
    {
      category: "Tools",
      techs: ["Git", "Linux", "Nginx", "Apache Kafka", "RabbitMQ", "GraphQL"],
    },
  ]

  const expertise = [
    {
      title: "Backend Engineering",
      description: "Scalable microservices, API design, and high-performance server architecture",
      icon: Server,
      color: "from-blue-500/20 to-cyan-500/20",
      features: ["Microservices", "API Design", "Performance Optimization"],
    },
    {
      title: "Artificial Intelligence",
      description: "Deep learning, neural networks, and intelligent automation systems",
      icon: Brain,
      color: "from-purple-500/20 to-pink-500/20",
      features: ["Deep Learning", "Neural Networks", "MLOps"],
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, Kubernetes, containerization, and distributed systems",
      icon: Cloud,
      color: "from-indigo-500/20 to-blue-500/20",
      features: ["Container Orchestration", "Auto-scaling", "Monitoring"],
    },
    {
      title: "Data Engineering",
      description: "Big data processing, real-time analytics, and data pipeline optimization",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/20",
      features: ["ETL Pipelines", "Real-time Analytics", "Data Modeling"],
    },
  ]

  const contactLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/inoyatullo-musayev/", color: "from-blue-600/30 to-blue-500/30" },
    { name: "GitHub", icon: Github, href: "https://github.com/MIForever", color: "from-gray-600/30 to-slate-500/30" },
    { name: "Telegram", icon: Send, href: "https://t.me/i_musayev", color: "from-cyan-600/30 to-blue-500/30" },
    { name: "Email", icon: Mail, href: "mailto:inoyatullomusayev1@gmail.com", color: "from-purple-600/30 to-indigo-500/30" },
  ]

  // Memoized stars to prevent regeneration on re-renders
  const stars = useMemo(() => {
    return Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      // More noticeable movement
      moveX: (Math.random() - 0.5) * 80, // -40 to +40
      moveY: (Math.random() - 0.5) * 80, // -40 to +40
      moveDuration: Math.random() * 20 + 15, // 15-35 seconds
    }))
  }, []) // Empty dependency array ensures this only runs once

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-x-hidden relative"
    >
      {/* Sticky Navigation - All buttons on the right */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 z-30 p-6"
      >
        <div className="flex items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/inoyatullo-musayev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 to-blue-500/30 border border-white/10 shadow-2xl"
          >
            <Linkedin className="w-6 h-6 text-blue-300" />
          </motion.a>

          <motion.a
            href="https://github.com/MIForever"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-gray-600/30 to-slate-500/30 border border-white/10 shadow-2xl"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1Gol3b6F2pIY-5raYj-87indyZtsgbo5W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-cyan-600/40 to-blue-600/40 border border-cyan-500/30 shadow-2xl"
          >
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-300 font-medium">CV</span>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Fixed Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient - consistent */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />

        {/* Enhanced Star Field with Consistent Positions */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                scale: [1, 1.4, 1],
                x: [0, star.moveX, 0],
                y: [0, star.moveY, 0],
              }}
              transition={{
                opacity: {
                  duration: star.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: star.twinkleDelay,
                  ease: "easeInOut",
                },
                scale: {
                  duration: star.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: star.twinkleDelay,
                  ease: "easeInOut",
                },
                x: {
                  duration: star.moveDuration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                y: {
                  duration: star.moveDuration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>

        {/* Static Cosmic Dust Clouds */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 800px 400px at 25% 25%, rgba(6,182,212,0.08) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 75% 75%, rgba(59,130,246,0.06) 0%, transparent 50%),
                radial-gradient(ellipse 700px 350px at 50% 80%, rgba(147,51,234,0.05) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 150, 0],
              y: [0, (Math.random() - 0.5) * 150, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Static Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Static Distant Galaxies */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`galaxy-${i}`}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(ellipse, ${
                i % 3 === 0 ? "rgba(6,182,212,0.04)" : i % 3 === 1 ? "rgba(59,130,246,0.04)" : "rgba(147,51,234,0.04)"
              } 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Left/Right Layout */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center px-4 md:px-6 z-10"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Name */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-left"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white mb-8 pt-16 md:pt-0">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                  Inoyatullo
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Musayev
                </span>
              </h1>
            </motion.div>

            {/* Right Side - Info and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-left lg:text-left space-y-8"
            >
              {/* Fixed Rocket Status Indicator - Breathing Animation */}
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      {/* Rocket pointing up-right with breathing animation */}
                      <motion.div
                        className="transform rotate-45"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Rocket className="w-5 h-5 text-emerald-400" />
                      </motion.div>
                    </div>
                    <span className="text-emerald-300 font-medium">Crafting the Future</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-2 h-2 bg-emerald-400 rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-xl" />
                </div>
              </motion.div>

              <div className="space-y-6">
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-light text-slate-300 mb-4">Backend & AI Developer</p>
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-30 rounded-full" />
                </div>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Architecting intelligent systems and scalable infrastructure that power next-generation applications.
                  Specializing in high-performance backends and cutting-edge AI solutions.
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 600, damping: 30 }}
                    className={`group relative px-8 py-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r ${link.color} border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-200 z-20`}
                  >
                    <div className="flex items-center space-x-3">
                      <link.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-200" />
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-200">
                        {link.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                ))}
                {/* CV Download Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1Gol3b6F2pIY-5raYj-87indyZtsgbo5W/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  className="group relative px-8 py-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-cyan-600/40 to-blue-600/40 border border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-200 z-20"
                >
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors duration-200" />
                    <span className="text-cyan-300 font-medium group-hover:text-white transition-colors duration-200">
                      Download CV
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Expertise Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            {/* Expertise Section Header */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-8 md:mb-12 pb-4">
                Expertise
              </h2>
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl opacity-50 rounded-full" />
            </div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized domains where innovation meets implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${item.color} border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full`}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm mr-6">
                      <item.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm font-medium text-cyan-300 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Fixed Layout Like Image */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            {/* Technologies Section Header */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-8 md:mb-12 pb-4">
                Technologies
              </h2>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl opacity-50 rounded-full" />
            </div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks powering modern solutions
            </p>
          </motion.div>

          {/* Grid Layout Matching the Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologiesByCategory.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="relative p-6 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {item.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 text-sm font-medium text-slate-300 bg-slate-700/50 backdrop-blur-sm rounded-full border border-slate-600/30 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Images */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            {/* Projects Section Header */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-8 md:mb-12 pb-4">
                Projects
              </h2>
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl opacity-50 rounded-full" />
            </div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Innovative solutions showcasing technical excellence and creative problem-solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98, y: -6 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative rounded-3xl backdrop-blur-xl bg-gradient-to-br ${project.gradient} border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full overflow-hidden`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                          project.status === "Production"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : project.status === "Active"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : project.status === "Beta"
                                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                : project.status === "Development"
                                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                  : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
                        <project.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 600, damping: 30 }}
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200" />
                      </motion.div>
                    </div>

                    <div className="mb-4">
                      <span className="text-cyan-400 text-sm font-medium">{project.metrics}</span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6 text-sm group-hover:text-slate-200 transition-colors duration-200">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-4 md:px-6 border-t border-slate-800/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h3 className="text-4xl font-light bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Let's Build Something Extraordinary
              </h3>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl opacity-30 rounded-full" />
            </div>

            <p className="text-slate-400 mb-12 text-lg">Ready to transform ideas into reality?</p>

            {/* Fixed Footer Buttons - No Lag */}
            <div className="flex justify-center space-x-6 mb-8">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    duration: 0.15,
                  }}
                  className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-150"
                >
                  <link.icon className="w-7 h-7 text-slate-400 hover:text-cyan-400 transition-colors duration-150" />
                </motion.a>
              ))}
            </div>

            <div className="border-t border-slate-800/50 pt-8">
              <p className="text-slate-500 text-sm">© 2025 Inoyatullo Musayev. Crafted with precision and passion.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
