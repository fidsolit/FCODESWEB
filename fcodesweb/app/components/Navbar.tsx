import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold tracking-tight">
        FCODESWEB
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar