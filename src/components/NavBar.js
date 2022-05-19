import React from 'react';
import './style.css'
import wallet from '../assets/wallet.png';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className="lateral-bar">
            <div className="lateral-bar-content">
                <div className="link">
                    <div style={{float: "left"}}>
                        <img style= {{width: "20px"}} src={wallet} alt="Wallet" />
                    </div>
                    <div>
                        <Link style={{marginLeft: "5px"}} to="/financas">Finanças</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;