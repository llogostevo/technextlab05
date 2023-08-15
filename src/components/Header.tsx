import Link from "next/link";

export default function Header() {
  return (
    <div>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/paddle">Paddle</Link>
        </nav>
    </div>
  )
}
