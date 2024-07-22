import './App.css'
import Emails from './components/Emails/Emails'
import MenuLeft from './components/MenuLeft'
import Sider from './components/Sider/Sider'
import Header from './components/Header/Header'

function App() {

  return (

    <div className='w-screen h-screen flex flex-col gap-8'>
      <div>
        <Header />
      </div>
      <div className='flex gap-10'>
        <MenuLeft/>
        <Emails />
      </div>
      <Sider />
    </div>
  )
}

export default App
