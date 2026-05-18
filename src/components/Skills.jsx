import { motion } from "framer-motion"
const skills = {

  ProgrammingLanguages: [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "SQL"
  ],

  FrontendDevelopment: [
    "HTML5",
    "CSS3",
    "React.js",
    "Tailwind CSS",
    "Responsive Web Design",
    "UI/UX Design"
  ],

  BackendDevelopment: [
    "Node.js",
    "Express.js",
    "Flask",
    "Firebase",
    "REST API Integration",
    "API Development"
  ],

  AIML: [
    "Machine Learning",
    "Deep Learning",
    "Transfer Learning",
    "TensorFlow",
    "Scikit-learn",
    
    
  ],

  Databases: [
    "MySQL",
    "MongoDB",
    "Firebase Firestore"
  ],

  ToolsAndPlatforms: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Jupyter Notebook",
    "Google Colab",
    "Figma",
    "Vercel",
    "XAMPP"
  ],

  CoreCS: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Problem Solving"
  ],

 

  DeveloperSkills: [
    "Debugging",
    "Code Optimization",
    "Version Control",
    "Agile Development"
  ],


}
function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Skills
        </h2>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {Object.entries(skills).map(([category, items]) => (

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                            key={category}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
                            >

              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {category.replace("_", " & ")}
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} className="flex flex-wrap gap-3">

                {items.map((skill) => (

                  <span
                    key={skill}
                    className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-white"
                  >
                    {skill}
                  </span>

                ))}

              </motion.div>

            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills