import Catelog from '@/components/Catalog'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Header />
      <Catelog />
      <Footer />
    </div>
  )
}
