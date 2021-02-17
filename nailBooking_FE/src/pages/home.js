import React from 'react';
import Header from "../header/header.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    setPage(e){
        let number = e.currentTarget.getAttribute("data-number");
        this.props.setPage(number);
    }

    renderData(dataList) {
        let list = [];

        for (let i = 0; i < dataList.length; i++) {
            let placeData = dataList[i];
            let imgSrcs = dataList[i].file.split("http://")[1];
            let place = {data :dataList[i], imgSrcs: "http://" + imgSrcs};
            list.push(<div onClick={this.setPage.bind(this)}
            data-number={placeData.SERIAL_NO}
            key={placeData.SERIAL_NO} className="place">
                <img className="picture" src={place.imgSrcs} />
                <div className="title">{placeData.stitle}</div>
                <div className="category">{placeData.CAT2}</div>
        </div>);
        }
        return list;
    }

    renderMain() {
        let main;
        if (this.props.data == null) {
            main = <main>Loading...</main>;
        } else {
            let list;
            if (this.props.filter == null) {
                list = this.renderData(this.props.data);
            } else {
                let filteredData = this.props.data.filter((place) => {
                    return place.CAT2 == this.props.filter;
                });
                list = this.renderData(filteredData);
            }
            main = <main>{list}</main>;
        }
        return main;
    }

    render() { 
        let main = this.renderMain();
        return <>
        <Header/>
            {main}
            </>;
    }
}
 
export default Home;