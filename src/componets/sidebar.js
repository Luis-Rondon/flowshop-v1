import React, { useState,} from "react";
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
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate


const Sidebar = () => {
    const [elementoActivo, setElementoActivo] = useState(null);
    const navigate = useNavigate();

    const manejarClick = (ruta) => {
        setElementoActivo(ruta); // Actualizar estado activo
        navigate(`/${ruta}`); // Navegar a la ruta correspondiente
    };
    

    return (
    <>
        <div className="navigation">
        <div 
            id="nav-items" 
            className={elementoActivo === 'dashboard' ? 'active' : ''} 
            onClick={() => manejarClick('dashboard')}
            >
            <DashboardIcon/>
            <span>Dashboard</span>
        </div>

        <div 
            id="nav-items"
            className={elementoActivo === 'panelc' ? 'active' : ''} 
            onClick={() => manejarClick('panelc')}
            >
            <ControlpanelIcon className={elementoActivo === 'panelc' ? 'active' : ''} />
            <span>Panel de control</span>
            </div>


            <div id="nav-items"
            className={elementoActivo === 'projects' ? 'active' : ''} 
            onClick={() => manejarClick('projects')}
            >
                <ProjectsIcon/>
                <span>Proyectos</span>
            </div>

            <div 
            id="nav-items"
            className={elementoActivo === 'creator-content' ? 'active' : ''} 
            onClick={() => manejarClick('creator-content')}
            >
                <CreatorIcon/>
                <span>Creador de contenido</span>
            </div>

            <div 
            id="nav-items"
            className={elementoActivo === 'campaign' ? 'active' : ''} 
            onClick={() => manejarClick('campaign')}
            >
                <CampaignIcon/>
                <span>Campañas</span>
            </div>

            <div 
            id="nav-items"
            className={elementoActivo === 'networks' ? 'active' : ''} 
            onClick={() => manejarClick('networks')}
            >
                <AccountIcon/>
                <span>Cuentas conectadas</span>
            </div>

            <div 
            id="nav-items"
            className={elementoActivo === 'payments' ? 'active' : ''} 
            onClick={() => manejarClick('payments')}
            >
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

