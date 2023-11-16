import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link href="/">Coder Wikipedia</Link>
        </div>
        <div>
            <Link href="/photos">Photo</Link>
            <Link href="/about">About</Link>
            <Link href="/coders">All Coders</Link>
        </div>
    </nav>
  )
}
