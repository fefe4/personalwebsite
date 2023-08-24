import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section>
        <h1>About me</h1>
        <p></p>
      </section>
      <section className=''>
        <h2>Projects</h2>
        <p></p>
      </section>
    </main>
  )
}



export default App
