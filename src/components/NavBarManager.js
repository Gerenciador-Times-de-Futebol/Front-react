import React from 'react';
import { Link } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';


function NavBarManager(){
    return (
            <div
              style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
            >
              <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <a
                    href="/"
                    className="text-decoration-none"
                    style={{ color: 'inherit' }}
                  >
                    Time Bom
                  </a>
                </CDBSidebarHeader>
        
                <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                    <Link exact to="/home-manager" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="home">Inicio</CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/jogadores-manager" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="users">Jogadores</CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/compromissos-manager" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="calendar">
                        Compromissos
                      </CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/treinos-manager" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="dumbbell">
                        Treinos
                      </CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/config-manager" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="user-cog">
                        Configurações
                      </CDBSidebarMenuItem>
                    </Link>
                  </CDBSidebarMenu>
                </CDBSidebarContent>
              </CDBSidebar>
            </div>
    );
 };
export default NavBarManager;