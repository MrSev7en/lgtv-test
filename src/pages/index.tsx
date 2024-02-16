import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('button').addEventListener('click', () => {
          document.write('<p>Hello</p>');
        });
      });
    }
  }, []);
  
  return (
    <main
      className={inter.className}
    >
      <button id="button">Salve</button>
    </main>
  )
}
