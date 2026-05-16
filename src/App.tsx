import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Footer } from './components/Footer'

function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </LangProvider>
  )
}

export default App
