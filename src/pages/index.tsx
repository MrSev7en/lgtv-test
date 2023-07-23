import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={inter.className}
    >
      <button onClick={() => document.write('<p>Hello</p>')}>Salve</button>
    </main>
  )
}
