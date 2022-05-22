import React from 'react';
import { Link } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';


function NavBar(){
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
                    <Link exact to="/" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="home">Inicio</CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/jogadores" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="users">Jogadores</CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/comissao" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="user-tie">Comissão Técnica</CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/financas" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="money-check-alt">
                        Finanças
                      </CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/compromissos" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="calendar">
                        Compromissos
                      </CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/treinos" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="dumbbell">
                        Treinos
                      </CDBSidebarMenuItem>
                    </Link>
                    <Link exact to="/config" activeClassName="activeClicked">
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
export default NavBar;