import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between">
      <Link href="/" className="font-bold text-xl">Dheeraj</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
      </div>
    </nav>
  );
}