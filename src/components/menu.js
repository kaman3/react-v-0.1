import React from "react";
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div className = "menu">
                <ul>
                    <li><Link to = "/">Главная</Link></li>
                    <li><Link to = "/about_us">О нас</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;