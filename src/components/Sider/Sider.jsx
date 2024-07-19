import Calendar from '../../assets/icons/calendar.svg'
import LightBulb from '../../assets/icons/lightbulb.svg'
import Task from '../../assets/icons/task.svg'
import Group from '../../assets/icons/group.svg'
import Add from '../../assets/icons/add.svg'

import './Sider.css'

const Sider = () => {
  return (
    <div>
        <aside>
            <div className="sidebar">
                <div className="icon">
                    <button><img src={Calendar} alt="Calendário" /></button>
                </div>
                <div className="icon">
                    <button><img src={LightBulb} alt="Dica" /></button>
                </div>
                <div className="icon">
                    <button><img src={Task} alt="Verificação" /></button>
                </div>
            <div className="icon">
                <button><img src={Group} alt="Usuário" /></button>
            </div>
                <div className="separator"></div>
                <div className="icon">
                    <button><img src={Add} alt="Adicionar" /></button>
                </div>
            </div>/
        </aside>
    </div>
  )
}

export default Sider
