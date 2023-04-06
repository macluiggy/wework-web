import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductDescription from './components/ProductDescription'
import SolutionSection from './components/SolutionsSection'

// componentes


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ProductDescription />
      <SolutionSection />
    </div>
  )
}

export default App
