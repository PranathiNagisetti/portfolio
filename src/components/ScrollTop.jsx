import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () =>
      window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    visible && (

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-cyan-400 text-black p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <FaArrowUp />
      </button>

    )
  )
}

export default ScrollTop