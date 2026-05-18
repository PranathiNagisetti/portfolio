import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { HiSun, HiMoon } from "react-icons/hi"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
   
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Pranathi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
        

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-6 flex flex-col gap-6 text-white">

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>

      )}

    </nav>
  )
}

export default Navbar