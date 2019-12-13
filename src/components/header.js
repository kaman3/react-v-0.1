import React from "react";
import Menu from  "./menu";

class Header extends React.Component{
    render(){
        return(
            <div className = "row">
                <div className = "col-lg-12-auto banner">
                    <img src = "images/banner-header.jpg"/>
                </div>
                <Menu/>
            </div>
        );
    }
}

export default Header;