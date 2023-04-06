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
      <SolutionSection solution={{
        title: 'Solucion 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
        range: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.'
      }} />
    </div>
  )
}

export default App
