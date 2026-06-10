import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Styret from '@/components/sections/Styret'
import InstagramFeed from '@/components/sections/InstagramFeed'
import Partners from '@/components/sections/Partners'
import ForBedrifter from '@/components/sections/ForBedrifter'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Styret />
        <InstagramFeed />
        <Partners />
        <ForBedrifter />
      </main>
      <Footer />
    </>
  )
}
