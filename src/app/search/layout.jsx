import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar'))
const Footer = dynamic(() => import('@/components/FooterContent'))

export const metadata = {
  title: 'Cari Kursus',
  description: '',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}