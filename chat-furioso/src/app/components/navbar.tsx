import { PiFlowerLotus } from 'react-icons/pi'
import { FiSun } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { RiMenu2Line } from 'react-icons/ri'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaRegMoon } from 'react-icons/fa'
import { useTheme } from '../hooks/use-theme'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [fade, setFade] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
    setTimeout(() => {
      setFade(true)
    }, 100)
  }

  const handleCloseMenu = () => {
    setFade(false)
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 500)
  }

  return (
    <nav
      style={{
        backgroundColor:
          theme === 'light'
            ? 'rgba(255, 255, 255, 0.6)'
            : 'rgba(10, 10, 10, 0.6)',
        color: theme === 'light' ? 'black' : 'white'
      }}
      className="fixed left-0 top-0 z-10 flex w-full items-center justify-between p-5 px-8 font-mont backdrop-blur-md transition-all duration-700"
    >
      <RiMenu2Line
        className="flex cursor-pointer text-2xl sm:hidden"
        onClick={handleOpenMenu}
      />
      <div className="hidden items-center gap-16 sm:flex">
        <PiFlowerLotus className="text-3xl" />
        <div className="flex items-center gap-8 text-lg">
          <a href="#" className="cursor-pointer">
            Home
          </a>
          <a href="#" className="cursor-pointer">
            About
          </a>
          <a href="#" className="cursor-pointer">
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6 text-xl">
        <a
          href="https://github.com/enzosakamoto/react-workshop"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        {theme === 'light' ? (
          <FaRegMoon onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <FiSun onClick={toggleTheme} className="cursor-pointer" />
        )}
      </div>
      {isMenuOpen && (
        <>
          <div
            className={`absolute left-0 top-0 z-20 h-screen w-full bg-black/50 transition-all duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleCloseMenu}
          />
          <div
            style={{
              backgroundColor:
                theme === 'light'
                  ? 'rgba(255, 255, 255, 1)'
                  : 'rgba(10, 10, 10, 1)',
              color: theme === 'light' ? 'black' : 'white'
            }}
            className={`absolute left-0 top-0 z-30 flex h-screen w-4/5 flex-col gap-8 bg-white p-12 transition-all duration-700 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          >
            <IoClose
              className="absolute left-[85%] top-4 cursor-pointer text-4xl"
              onClick={handleCloseMenu}
            />
            <PiFlowerLotus className="text-6xl" />
            <div className="flex flex-col justify-center gap-8 text-xl">
              <a
                href="#"
                className={`cursor-pointer transition-all duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Home
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-100 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                About
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-200 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
