import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe'
import Navigation from './components/Navigation'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Home from './components/Home'



function App() {
  
  const [page, setPage] = useState('')
function renderPage(){
  switch(page){
    case 'About':
      return <AboutMe />
    case 'Portfolio':
      return <Portfolio />
    case 'Resume':
      return <Resume />
    case 'Contact':
      return <Contact />
    default:
      return <Home />
  }
}


  return (
    <>
     
      <Navigation page={page} setPage={setPage}/>
      <div>{renderPage(page)}</div>
     
    </>
  )
}

export default App
