import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"
import resume from "../assets/PranathiNagisetti.pdf"
import { TypeAnimation } from "react-type-animation"
import { FaEye } from "react-icons/fa"
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Hi, I'm
            <span className="text-cyan-400"> Pranathi Nagisetti </span>
          </h1>

          <TypeAnimation
                sequence={[
                    "AI/ML Enthusiast",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Hackathon Builder",
                    2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl text-zinc-300 font-medium block mb-8"
                />

          <div className="flex gap-4 flex-wrap mb-8">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <div className="flex flex-wrap gap-4">

          {/* VIEW RESUME */}

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition flex items-center gap-2"
          >

            <FaEye />

            View Resume

          </a>

        {/* DOWNLOAD RESUME */}

        <a
          href={resume}
          download
          className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
        >

          <FaDownload />

          Download Resume

        </a>

      </div>

                </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-3xl text-white">

            <a
              href="https://github.com/PranathiNagisetti"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nagisetti-pranathi-51011b2b8/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="data:image/jpeg;base64,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"
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero