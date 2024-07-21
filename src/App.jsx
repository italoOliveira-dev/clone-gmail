import './App.css'
import Emails from './components/Emails/Emails'
import Sider from './components/Sider/Sider'
import Toolbar from './components/Toolbar/Toolbar'

function App() {

  return (
    <div className='w-screen h-screen'>
      <Toolbar/>
      <Emails />
      <Sider />
    </div>
  )
}

export default App
