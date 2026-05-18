import { motion } from "framer-motion"

const experiences = [
  {
    year: "2026",
    title: "AI/ML Projects",
    desc: "Built intelligent healthcare and agriculture solutions using Machine Learning."
  },

  {
    year: "2025",
    title: "Hackathons & Innovation",
    desc: "Participated in hackathons and built impactful real-world solutions."
  },

  {
    year: "2024",
    title: "Web Development Journey",
    desc: "Started building full stack applications and portfolio projects."
  }
]

function Experience() {
  return (
    <section className="py-24 px-6 bg-zinc-950">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-20">
          Experience
        </h2>

        <div className="relative border-l border-cyan-400">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              className="mb-16 ml-10"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-2.5"></div>

              <p className="text-cyan-400 font-semibold mb-2">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience