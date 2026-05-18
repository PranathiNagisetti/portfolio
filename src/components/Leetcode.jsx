function Leetcode() {

  return (

    <section className="py-24 px-6 bg-zinc-950">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEETCODE */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

            <h3 className="text-3xl font-bold text-white mb-6">
              LeetCode
            </h3>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Solved 1000+ problems focused on Data Structures,
              Algorithms, Dynamic Programming, Graphs, and Interview Preparation.
            </p>

            <a
              href="https://leetcode.com/u/pranathi5555/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition inline-block"
            >
              View Profile
            </a>

          </div>

          {/* CODECHEF */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

            <h3 className="text-3xl font-bold text-white mb-6">
              CodeChef
            </h3>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Competitive programming profile with problem-solving
              practice across algorithms and coding contests.
            </p>

            <a
              href="https://www.codechef.com/users/pranathi57"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition inline-block"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Leetcode