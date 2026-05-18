import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 3,
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticlesBackground