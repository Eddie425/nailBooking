import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import Nav from "../nav/nav.js";
import Main from "../main/main.js"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: null
        }
    }

    setFilter(filter){
        this.setState({
            filter: filter
        })
    }

    render(){
        
        return <>
            <Nav setFilter={this.setFilter.bind(this)}/>
            <Main filter={this.state.filter}/>
        </>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
