import React from "react";
import DashboardIcon from './icons-sidebar/dashboardIcon'
import AccountIcon from './icons-sidebar/accountIcon'
import CampaignIcon from './icons-sidebar/campaignIcon'
import ConfigIcon from './icons-sidebar/configIcon'
import ControlpanelIcon from './icons-sidebar/controlpanelIcon'
import CreatorIcon from './icons-sidebar/creatorIcon'
import LogoutIcon from './icons-sidebar/logoutIcon'
import PaymentsIcon from './icons-sidebar/paymentsIcon'
import ProjectsIcon from './icons-sidebar/projectsIcon'
import TutorialIcon from './icons-sidebar/tutorialIcon'


const Sidebar = () => {

    return (
    <>

        <div className="navigation">

            <div id="nav-items">
                <DashboardIcon/>
                <span>Dashboard</span>
            </div>

            <div id="nav-items">
                <ControlpanelIcon/>
                <span>Panel de control</span>
            </div>

            <div id="nav-items">
                <ProjectsIcon/>
                <span>Proyectos</span>
            </div>

            <div id="nav-items">
                <CreatorIcon/>
                <span>Creador de contenido</span>
            </div>

            <div id="nav-items">
                <CampaignIcon/>
                <span>Campañas</span>
            </div>

            <div id="nav-items">
                <AccountIcon/>
                <span>Cuentas conectadas</span>
            </div>

            <div id="nav-items">
                <PaymentsIcon/>
                <span>Facturación y pagos</span>
            </div>
            
        </div>

        <div className="bottom-items">
            <div id="tutorial">
                <TutorialIcon/>
                <span>Tutoriales</span>
            </div>

            <div id="config">
                <ConfigIcon/>
                <span>Configuración</span>
            </div>

            <div id="logout">
                <LogoutIcon/>
                <span>Cerrar Sesion</span>
            </div>
        </div>

    </>
    )
}

export default Sidebar

