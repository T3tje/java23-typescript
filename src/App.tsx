import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const age:number = 3;

    for (let i:number = 0; i <= age; i++) {
        console.log(i);
    }

    if (age > 18) {
        console.log("Das Alter ist größer als 18")
    } else {
        console.log("Das Alter ist kleiner als 18")
    }

    const score:number = 0;

    if (score) {
        console.log("Score ist evaluated as truthy.")
    } else {
        console.log("score is NOT evaluated as truthy.")
    }

    const username:string = "";

    if (!username) {
        console.log("Username ist evaluated as falsy")
    } else {
        console.log("Username ist NOT evaluated as falsy")
    }

    const isAdmin:boolean = false;

    if (isAdmin) {
        console.log("isAdmin is considered as truthy")
    } else {
        console.log("Admin is NOT considered as truthy")
    }

    if (!isAdmin) {
        console.log("isAdmin is false")
        } else {
        console.log("isAdmin is NOT false")
    }


    function drawChristmasTree(n) {
        // Draw the top part of the tree
        for (let i = 1; i <= n; i++) {
            let spaces = ' '.repeat(n - i);
            let stars = '*'.repeat(2 * i - 1);
            console.log(spaces + stars);
        }

        // Draw the trunk
        for (let i = 1; i <= 4; i++) {
            console.log(' '.repeat(n - 1) + '*');
        }
    }

// Call the function with n = 5
    drawChristmasTree(5);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
