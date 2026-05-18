import { motion } from "framer-motion"

import apsche from "../assets/certifications/apsche.png"
import knight from "../assets/certifications/knight.png"
import soln from "../assets/certifications/soln.png"
import smartcoder from "../assets/certifications/smartcoder.png"
import python from "../assets/certifications/python.png"
import mentor from "../assets/certifications/mentor.png"
import codess from "../assets/certifications/codess.png"
const certifications = [

  {
    title: "Artificial Intelligence & Machine Learning",
    image: apsche,
  },

  {
    title: "LeetCode Knight Badge",
    image: knight,
  },

  
  {
    title: "Smart Interviews Mentor",
    image: mentor,
  },

  {
    title: "Google Soln Challenge",
    image: soln,
  },

  {
    title: "Smart Coder Certificate",
    image: smartcoder,
  },

  
  {
    title: "Data Science with Python",
    image: python,
  },

  {
    title: "Codess Cafe Mentee",
    image: codess,
  },
]

function Certifications() {

  return (

    <section className="py-24 px-6 bg-zinc-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}

              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"

              initial={{ opacity: 0, y: 80 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.7 }}

              viewport={{ once: true }}
            >

              {/* CERTIFICATE IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-lg font-semibold text-white text-center leading-relaxed">
                  {cert.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications