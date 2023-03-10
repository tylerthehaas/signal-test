import { signal, useSignal } from '@preact/signals-react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'

const count = signal(0)

function App() {
  // const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <button
          onClick={() => {
            count.value++
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on components in the preview and open the
          code in the editor!
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
