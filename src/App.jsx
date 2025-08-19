import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="md:pt-0 pt-0">
        <Hero />
        <Cards />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
