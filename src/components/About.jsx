import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-zinc-950"
    >

      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed">
          I’m Pranathi Nagisetti, a third-year Computer Science Engineering
          student at Shri Vishnu Engineering College for Women with a strong
          passion for problem solving, Machine Learning, and Full Stack
          Development.
        </p>

        <br />

        <p className="text-zinc-400 text-lg leading-relaxed">
          I have solved 1000+ problems on{" "}
          <a
            href="https://leetcode.com/u/pranathi5555/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            LeetCode
          </a>,
          which has strengthened my understanding of Data Structures and
          Algorithms.
        </p>

        <br />

        <p className="text-zinc-400 text-lg leading-relaxed">
          Currently, I work as a mentor at Smart Interviews, where I guide
          students in understanding DSA concepts and improving their
          problem-solving approach. I have mentored over 150 students,
          improving my communication and leadership skills.
        </p>

        <br />

        <p className="text-zinc-400 text-lg leading-relaxed">
          I also serve as the Organizer of{" "}
          <a
            href="https://gdg.community.dev/u/mwuzbg/#/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Google Developer Groups on Campus
          </a>{" "}
          at my college, where I organize workshops, hackathons, and
          technical sessions for 800+ participants.
        </p>

        <br />

        <p className="text-zinc-400 text-lg leading-relaxed">
          I enjoy building impactful applications using AI and modern web
          technologies. Some of my projects include Poultry Detect,
          JobSprint, and MockMate AI.
        </p>

      </motion.div>

    </section>
  )
}

export default About