import React from "react";
import DashboardIcons from './icons-sidebar/dashboardIcons'
import AccountsIcon from './icons-sidebar/accountsIcon'
import CampainIcon from './icons-sidebar/campainIcon'
import ConfigIcon from './icons-sidebar/configIcon'
import ControlpanelIcons from './icons-sidebar/controlpanelIcons'
import CreatorcontentIcons from './icons-sidebar/creatorcontentIcons'
import LogoutIcons from './icons-sidebar/logoutIcons'
import PaymentsIcons from './icons-sidebar/paymentsIcons'
import ProjectsIcons from './icons-sidebar/projectsIcons'
import TutorialsIcons from './icons-sidebar/tutorialsIcons'


const Sidebar = () => {

    return (
    <>
        <div className="menuSide">
            <div id="list-sidebar"><DashboardIcons/><span>Dashboard</span> </div>
            <div id="list-sidebar"><ControlpanelIcons/> <span>Panel de Control</span>  </div>
            <div id="list-sidebar"><ProjectsIcons/> <span>Proyectos</span></div>
            <div id="list-sidebar"><CreatorcontentIcons/> <span>Creador de Contenido</span></div>
            <div id="list-sidebar"><CampainIcon/> <span>Camapañas</span></div>
            <div id="list-sidebar"><AccountsIcon/> <span>Cuentas Conectadas</span></div>
            <div id="list-sidebar"><PaymentsIcons/> <span>Facturación y pagos</span></div>
        </div>
        <div className="Side-config">
            <div id="list-config"><TutorialsIcons/> <span>Tutoriales</span></div>
            <div id="list-config" ><ConfigIcon/> <span>Configuracion</span></div>
            <div id="list-config" className="logoutbutton"><LogoutIcons/> <span>Cerrar Sesion</span></div>
        </div>
    </>
    )
}

export default Sidebar

