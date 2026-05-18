import { useParams, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import projects from "../data/projectsData"

function ProjectDetails() {

  const { id } = useParams()

  const project = projects.find(
    (p) => p.id === id
  )

  if (!project) {
    return (
      <div className="text-white p-20">
        Project not found
      </div>
    )
  }

  return (

    <section className="min-h-screen bg-zinc-950 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-zinc-900 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition mb-10"
        >

          <FaArrowLeft />

          Back

        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-3xl mb-10 max-h-[500px] object-cover"
        />

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          {project.title}
        </h1>

        <p className="text-zinc-300 text-lg leading-relaxed mb-10">
          {project.fullDescription}
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Features
        </h2>

        <ul className="space-y-4 mb-10">

          {project.features.map((feature) => (

            <li
              key={feature}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4"
            >
              {feature}
            </li>

          ))}

        </ul>

        <div className="flex flex-wrap gap-4 mb-10">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="bg-black border border-zinc-700 px-4 py-2 rounded-xl"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold"
          >
            Live Demo
          </a>

        </div>

      </div>

    </section>
  )
}

export default ProjectDetails