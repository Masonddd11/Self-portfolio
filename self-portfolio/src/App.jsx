import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SNSwidgets from './components/Footer/SNSwidgets'
import Projects from './components/Projects/Project'
import Contact from './components/Contacts/Contact'


function App() {
  
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className=''>
      <div className="header fixed top-0 flex min-w-[100%] justify-center z-50">
        <Navbar toggleTheme={toggleTheme} />
      </div>
      <div className="main ">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="footer">
        <SNSwidgets />
      </div>
   </div>
  )
}

export default App
