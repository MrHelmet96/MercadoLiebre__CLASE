import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [menuItems, setMenuItems] = useState([]);

  const addItemToMenu = (item) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <>
      <HomeContainer/>
      <Menu items={menuItems}/>
    </>
  )
}

export default App
