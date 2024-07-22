import './App.css'
import Emails from './components/Emails/Emails'
import MenuLeft from './components/MenuLeft'
import Sider from './components/Sider/Sider'

function App() {

  return (
    <div className='w-screen h-screen flex gap-8'>
      <MenuLeft/>
      <Emails />
      <Sider />
    </div>
  )
}

export default App
