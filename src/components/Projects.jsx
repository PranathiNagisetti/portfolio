import { Link } from "react-router-dom"

import projects from "../data/projectsData"

function Projects() {

  return (

    <section
      id="projects"
      className="py-24 px-6 bg-zinc-950 min-h-screen"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <Link
              to={`/projects/${project.id}`}
              key={project.id}
            >

              <div
                className="cursor-pointer bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] h-full"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-xl text-sm text-white"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects