import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-zinc-400 text-lg mb-16">
          Feel free to connect with me for collaborations,
          internships, or exciting opportunities.
        </p>

        {/* CONTACT CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* GITHUB */}

          <a
            href="https://github.com/PranathiNagisetti"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
              <FaGithub />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              GitHub
            </h3>

            <p className="text-zinc-400">
              
            </p>

          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/nagisetti-pranathi-51011b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
              <FaLinkedin />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              LinkedIn
            </h3>

            <p className="text-zinc-400">
              
            </p>

          </a>

          {/* EMAIL */}

                  <a
          href="mailto:pranathisiri05@gmail.com?subject=Portfolio%20Contact&body=Hello%20Pranathi,"
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
        >

          <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
            <FaEnvelope />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Email
          </h3>

          <p className="text-zinc-400 break-words">
           
          </p>

        </a>

          

        </div>

      </div>
    </section>
  )
}

export default Contact