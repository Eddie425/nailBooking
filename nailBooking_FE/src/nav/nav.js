import "./nav.css";
import React from "react";
import StyleItem from "../shared-ui/style-Item.js";

class Nav extends React.Component{
    render(){
        return <nav>
                    <div className="logo">台北市景點</div>
                    <div className="menu">
                        <StyleItem setFilter={this.props.setFilter} word="養生溫泉" />
                        <StyleItem setFilter={this.props.setFilter} word="歷史建築" />
                        <StyleItem setFilter={this.props.setFilter} word="藝文館所" />
                    </div>
                </nav>;
    }
}
export default Nav;
