import { useEffect } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      (window as any)?.document.addEventListener('DOMContentLoaded', () => {
        (window as any)?.document.getElementById('button').addEventListener('click', () => {
          (window as any)?.document.write('<p>Hello</p>')
        })
      })
    }
  }, [])

  return (
    <main
      className={inter.className}
    >
      <button id="button">Salve</button>
    </main>
  )
}
