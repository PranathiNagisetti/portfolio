function GithubStats() {

  return (

    <section className="py-24 px-6 bg-zinc-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          GitHub Stats
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* GITHUB STATS */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 hover:border-cyan-400 transition duration-300">

            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api?username=PranathiNagisetti&show_icons=true&theme=tokyonight"
              alt="GitHub Stats"
              className="w-full rounded-2xl"
            />

          </div>

          {/* GITHUB STREAK */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 hover:border-cyan-400 transition duration-300">

            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=PranathiNagisetti&theme=tokyonight&hide_border=true&background=0D1117"
              alt="GitHub Streak"
              className="w-full rounded-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default GithubStats