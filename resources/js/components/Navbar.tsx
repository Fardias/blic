import { Link } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link href='/'><img src='/logo.png' alt='Logo' /></Link>
    </nav>
  )
}

export default Navbar