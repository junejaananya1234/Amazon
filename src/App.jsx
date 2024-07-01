import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Footer from './components/footer/Footer'
import Banner from './components/Banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Footer/>

    </>
  )
}

export default App
